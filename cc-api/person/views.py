from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, authentication
from .models import Emotion, PersonEmotion, Person
from .serializers import EmotionSerializer, PersonSerializer, PersonEmotionSerializer


class PersonView(APIView):
    authentication_classes = [authentication.TokenAuthentication]

    @staticmethod
    def get(request):
        person = Person.objects.all()
        person_s = PersonSerializer(person, many=True)
        return Response(person_s.data)
