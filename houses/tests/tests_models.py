from django.core.files.uploadedfile import SimpleUploadedFile
from django.core.exceptions import ValidationError
from django.test import TestCase
from houses.models import House, City, PhotoHouse


class HouseTestCase(TestCase):
    def setUp(self):
        City.objects.create(title="Koeln")
        c = City.objects.get(title="Koeln")
        House.objects.create(title="test_house", desc="good house near see",
                             address="House 123, 51109 Kolln", city=c, qm=62)

    def test_houses_return_title(self):
        h = House.objects.get(title="test_house")
        self.assertEqual(h.__str__(), "test_house")

    def test_house_return_city_name(self):
        h = House.objects.get(title="test_house")
        self.assertEqual(h.city.title, "Koeln")

    def test_dont_allow_have_two_main_photos(self):
        h = House.objects.get(title="test_house")
        image = SimpleUploadedFile(name='test_photo.jpeg',
                                   content=open('houses/tests/test_photo.jpeg',
                                                'rb').read(),
                                   content_type='image/jpeg')
        PhotoHouse.objects.create(title="test_title", house=h,
                                  main_photo=True, image=image)
        PhotoHouse.objects.create(title="test_title", house=h,
                                  main_photo=True, image=image)

        p2 = PhotoHouse.objects.get(id=2)

        self.assertEqual(p2.main_photo, False)
