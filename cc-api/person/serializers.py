from rest_framework import serializers
from .models import Emotion, Person, PersonEmotion


class EmotionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Emotion
        fields = '__all__'


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = '__all__'


class PersonEmotionSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonEmotion
        fields = '__all__'
