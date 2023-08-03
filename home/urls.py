
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  
    path('login/', views.login_view, name='login'),
    path('upload/',views.upload_view, name='upload'),
    path('logout/', views.logout_view, name='logout'),

]