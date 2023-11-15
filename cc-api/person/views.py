from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, authentication
from .models import Emotion, PersonEmotion, Person
from .serializers import EmotionSerializer, PersonSerializer, PersonEmotionSerializer, PersonViewSerializer
from user.serializers import UserSerializer
from django.db import transaction, IntegrityError


class PersonView(APIView):
    authentication_classes = [authentication.TokenAuthentication]

    @staticmethod
    def get(request):
        person = Person.objects.all()
        person_s = PersonViewSerializer(person, many=True)
        return Response(person_s.data, status=status.HTTP_200_OK)

    @staticmethod
    def post(request):
        try:
            with transaction.atomic():
                print(request.data)
                user_s = UserSerializer(data=request.data)
                if not user_s.is_valid():
                    raise IntegrityError
                user = user_s.save()
                request.data['user'] = user.__dict__['id']
                person_s = PersonSerializer(data=request.data)
                if not person_s.is_valid():
                    print(person_s.errors)
                    user.delete()
                    raise IntegrityError
                print(person_s.save())
                # person = person_s.save()
        except IntegrityError:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        return Response(data={'status': 'OK'}, status=status.HTTP_201_CREATED)


class PersonDetailView(APIView):
    authentication_classes = [authentication.TokenAuthentication]

    @staticmethod
    def get(request, pk=None):
        try:
            person = Person.objects.get(pk=pk)
            person_s = PersonViewSerializer(person)
            return Response(person_s.data, status=status.HTTP_200_OK)
        except Person.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


class PersonConnectView(APIView):
    authentication_classes = [authentication.TokenAuthentication]

    @staticmethod
    def get(request, pk=None):
        try:
            person = Person.objects.get(pk=pk)
            loved_ones = PersonViewSerializer(person.loved_ones.all(), many=True)
            return Response(loved_ones.data, status=status.HTTP_200_OK)
        except Person.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    @staticmethod
    def post(request):
        try:
            person = Person.objects.get(user_id=request.user.id)
            if 'phone' not in request.data:
                raise Person.DoesNotExist
            loved_one = Person.objects.filter(
                phone=request.data['phone'],
                user__first_name=request.data['first_name'],
                user__last_name=request.data['last_name']
            )
            for x in loved_one:
                person.loved_ones.add(x)
            person.save()
            return Response(status=status.HTTP_200_OK)
        except Person.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
