from django.urls import path
from url_classifier import views

urlpatterns = [
    path('url_classifier', views.url_classifier, name='url_classifier')
]
