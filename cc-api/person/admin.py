from django.contrib import admin
from .models import Person, PersonEmotion, Emotion

# Register your models here.
admin.site.register(Person)
admin.site.register(PersonEmotion)
admin.site.register(Emotion)
