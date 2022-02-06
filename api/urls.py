from django.urls import path
from rest_framework import routers

from .views import IndexView, GetDataView, CityViewSet, PhotosViewSet, SendMailView

router = routers.SimpleRouter()
router.register(r'city', CityViewSet)
router.register(r'photos', PhotosViewSet)

urlpatterns = [
    path('', IndexView.as_view(), name="index"),
    path('data/', GetDataView.as_view(), name="getdata"),
    path('send-mail/', SendMailView.as_view(), name="sendmail")
]

urlpatterns += router.urls
