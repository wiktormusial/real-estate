from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication, BasicAuthentication

from houses.models import House, City, PhotoHouse
from .serializers import DataSerializer, CitySerializer, PhotoHouseSerializer, SendMailSerializer


class IndexView(APIView):
    def get(self, *args, **kwargs):
        return Response("Hello!")


class GetDataView(APIView):
    def get(self, *args, **kwargs):
        queryset = House.objects.all()
        serializer = DataSerializer(queryset, many=True)
        return Response(serializer.data)


class CityViewSet(viewsets.ModelViewSet):
    serializer_class = CitySerializer
    queryset = City.objects.all()
    permission_classes = [IsAuthenticated]
    authentication_classes = [SessionAuthentication, BasicAuthentication]


class PhotosViewSet(viewsets.ModelViewSet):
    serializer_class = PhotoHouseSerializer
    queryset = PhotoHouse.objects.all()
    permission_classes = [IsAuthenticated]
    authentication_classes = [SessionAuthentication, BasicAuthentication]


class SendMailView(APIView):
    def post(self, request, format=None):
        serializer = SendMailSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
