from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, authentication
from .models import Emotion, PersonEmotion, Person
from .serializers import EmotionSerializer, PersonSerializer, PersonEmotionSerializer
from user.serializers import UserSerializer
from django.db import transaction, IntegrityError


class PersonView(APIView):
    authentication_classes = [authentication.TokenAuthentication]

    @staticmethod
    def get(request):
        person = Person.objects.all()
        person_s = PersonSerializer(person, many=True)
        return Response(person_s.data)

    @staticmethod
    def post(request):
        try:
            with transaction.atomic():
                user_s = UserSerializer(data=request.data)
                if not user_s.is_valid():
                    raise IntegrityError
                user = user_s.save()
                request.data['user'] = user.__dict__['id']
                person_s = PersonSerializer(data=request.data)
                if not person_s.is_valid():
                    user.delete()
                    raise IntegrityError
                person = person_s.save()
        except IntegrityError:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        return Response(data={'status': 'OK'}, status=status.HTTP_201_CREATED)