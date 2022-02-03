from django.test import TestCase
from houses.models import House, City


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
