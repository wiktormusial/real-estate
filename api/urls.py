from django.urls import path
from rest_framework import routers

from .views import IndexView, GetData, CityViewSet, PhotosViewSet

router = routers.SimpleRouter()
router.register(r'city', CityViewSet)
router.register(r'photos', PhotosViewSet)

urlpatterns = [
    path('', IndexView.as_view(), name="index"),
    path('data/', GetData.as_view(), name="getdata"),
]

urlpatterns += router.urls
