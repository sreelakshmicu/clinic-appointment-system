from django.urls import path
from .views import (
    LoginView,
    UserProfileView,
    DoctorListView,
    AppointmentView,
)

urlpatterns = [
    path('login/', LoginView), 
    path('profile/', UserProfileView),  
    path('doctors/', DoctorListView),  
    path('appointments/', AppointmentView),  
]
