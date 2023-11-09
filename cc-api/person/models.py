from django.db import models
from django.utils import timezone
from user.models import User


# Create your models here.
class Emotion(models.Model):
    name = models.CharField(max_length=128)

    def __str__(self):
        return f'{self.name}'


class Person(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=64)
    emotions = models.ManyToManyField(Emotion, blank=True, through="PersonEmotion")
    loved_ones = models.ManyToManyField('self', symmetrical=None, blank=True)

    def __str__(self):
        return f'{self.user} - {self.user.first_name} {self.user.last_name} - {self.phone}'


class PersonEmotion(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    emotion = models.ForeignKey(Emotion, on_delete=models.CASCADE)
    intensity = models.IntegerField()
    date = models.DateTimeField(default=timezone.now)
    description = models.CharField(max_length=4096)

    def __str__(self):
        return (f'{self.person.user.first_name} {self.person.user.last_name} -'
                f' {self.emotion.name} - {self.description} - {self.date}')
