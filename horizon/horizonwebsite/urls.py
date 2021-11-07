from . import views
from django.urls import path
urlpatterns = [
    path('', views.index, name="index"),
    path("austinresume/", views.austinresume, name="austinresume"),
    path("amazon/", views.amzexample, name="amzexample"),
    path("realestate/", views.realestate, name="realestate"),
    path("highstatus/", views.highstatus, name="highstatus"),
    path("linkedin/", views.linkedin, name="linkedin"),
]
