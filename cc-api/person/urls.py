from django.urls import path
from .views import PersonView, PersonDetailView, PersonConnectView

urlpatterns = [
    path('', PersonView.as_view()),
    path('<int:pk>/', PersonDetailView.as_view()),
    path('/connect_to/', PersonConnectView.as_view())
]
