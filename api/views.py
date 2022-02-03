from rest_framework.views import APIView
from rest_framework.response import Response

from houses.models import House
from .serializers import DataSerializer


class IndexView(APIView):
    def get(self, *args, **kwargs):
        return Response("Hello!")


class GetData(APIView):
    def get(self, *args, **kwargs):
        queryset = House.objects.all()
        serializer = DataSerializer(queryset, many=True)
        return Response(serializer.data)
