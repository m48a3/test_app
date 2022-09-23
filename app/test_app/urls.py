from django.urls import path
from . import views

urlpatterns = [
    path('', views.test),
    path('index', views.page1),
    path('page2', views.page2),
    path('page3', views.page3),

]