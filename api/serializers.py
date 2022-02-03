from rest_framework import serializers
from houses.models import House


class DataSerializer(serializers.ModelSerializer):

    class Meta:
        model = House
        fields = ['title', 'desc', 'address', 'qm', 'city', 'photos']
