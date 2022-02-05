from django.urls import path
from .views import IndexView


urlpatterns = [
    path('', IndexView.as_view(), name="index"),
    path('<int:id>', IndexView.as_view(), name="index_with_path")
]
