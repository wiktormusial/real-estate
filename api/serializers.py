from rest_framework import serializers
from houses.models import House, PhotoHouse


class PhotoHouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhotoHouse
        fields = ['id', 'title', 'house', 'main_photo', 'image']


class DataSerializer(serializers.ModelSerializer):
    photos = PhotoHouseSerializer(many=True, read_only=True)

    class Meta:
        model = House
        fields = ['title', 'desc', 'address', 'qm', 'city', 'photos']
