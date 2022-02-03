from rest_framework import serializers
from houses.models import House, PhotoHouse, City


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ['id', 'title']


class PhotoHouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhotoHouse
        fields = ['id', 'title', 'house', 'main_photo', 'image']


class DataSerializer(serializers.ModelSerializer):
    photos = PhotoHouseSerializer(many=True, read_only=True)
    city = CitySerializer(read_only=True)

    class Meta:
        model = House
        fields = ['title', 'desc', 'address', 'qm', 'city', 'photos']
