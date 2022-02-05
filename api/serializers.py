from rest_framework import serializers
from houses.models import House, PhotoHouse, City, HouseDetails


class HouseDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = HouseDetails
        fields = ['rooms', 'qm', 'beds', 'balcony', 'bathrooms', 'kitchen']


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ['id', 'title', 'zip_code']


class PhotoHouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhotoHouse
        fields = ['id', 'title', 'house', 'main_photo', 'image']


class DataSerializer(serializers.ModelSerializer):
    photos = PhotoHouseSerializer(many=True, read_only=True)
    city = CitySerializer(read_only=True)
    details = serializers.SerializerMethodField()

    class Meta:
        model = House
        fields = ['id', 'title', 'desc', 'details', 'housedetails', 'address',
                  'city', 'photos']

    def get_details(self, obj):
        queryset = HouseDetails.objects.get(pk=obj.housedetails.pk)
        serializer = HouseDetailsSerializer(queryset)
        return serializer.data
