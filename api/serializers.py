from rest_framework import serializers
from houses.models import House, PhotoHouse, City, HouseDetails
from django.core.mail import send_mail
import environ
env = environ.Env(
    # set casting, default value
    DEBUG=(bool, False)
)


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


class SendMailSerializer(serializers.Serializer):
    house_id = serializers.IntegerField()
    author = serializers.EmailField()
    subject = serializers.CharField(max_length=300)
    body = serializers.CharField()

    def save(self):
        house_id = self.validated_data['house_id']
        author = self.validated_data['author']
        subject = self.validated_data['body']
        body = self.validated_data['body']

        msg_subject = f'[{house_id}]: {subject}'
        msg_body = f'{author} send: \n{body}'

        send_mail(msg_subject, msg_body, author, [env('EMAIL_HOST_USER')])
