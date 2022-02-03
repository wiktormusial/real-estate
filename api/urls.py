from django.urls import path

from .views import IndexView, GetData

urlpatterns = [
    path('', IndexView.as_view(), name="index"),
    path('data/', GetData.as_view(), name="getdata")
]
