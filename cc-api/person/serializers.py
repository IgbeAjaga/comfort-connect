from rest_framework import serializers
from .models import Emotion, Person, PersonEmotion
from user.serializers import UserSerializer


class EmotionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Emotion
        fields = '__all__'


class PersonEmotionSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonEmotion
        fields = '__all__'


class PersonSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    emotions = PersonEmotionSerializer(many=True, read_only=True)

    class Meta:
        model = Person
        fields = '__all__'
