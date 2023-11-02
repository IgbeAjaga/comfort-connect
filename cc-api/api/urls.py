from django.urls import path, include
from rest_framework.authtoken import views


urlpatterns = [
    path('token/', views.obtain_auth_token),
    path('users/', include("user.urls")),
    path('person/', include('person.urls'))
]
