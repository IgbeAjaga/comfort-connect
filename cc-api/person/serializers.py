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
    class Meta:
        model = Person
        fields = '__all__'


class PersonEmotionViewSerializer(serializers.ModelSerializer):
    emotion = EmotionSerializer(read_only=True)

    class Meta:
        model = PersonEmotion
        fields = '__all__'


class PersonViewSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    emotions = EmotionSerializer(many=True, read_only=True)

    class Meta:
        model = Person
        fields = '__all__'
