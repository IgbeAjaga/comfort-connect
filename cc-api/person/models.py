from django.db import models
from django.utils import timezone
from user.models import User


# Create your models here.
class Emotion(models.Model):
    name = models.CharField(max_length=128)


class Person(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=64)
    # emotions = models.ForeignKey(Emotion, blank=True, on_delete=models.CASCADE)
    loved_ones = models.ManyToManyField('self', symmetrical=None, blank=True)


class PersonEmotion(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    emotions = models.ForeignKey(Emotion, on_delete=models.PROTECT)
    date = models.DateTimeField(default=timezone.now)
    description = models.CharField(max_length=4096)
