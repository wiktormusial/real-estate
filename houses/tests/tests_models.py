from django.test import TestCase
from houses.models import House


class HouseTestCase(TestCase):
    def test_houses_return_title(self):
        House.objects.create(title="test_house", desc="good house near see",
                             address="House 123, 51109 Kolln", qm=62)
        house = House.objects.get(title="test_house")

        self.assertEqual(house.__str__(), "test_house")
