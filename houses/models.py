from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

from utils.models import TimeStampedModel


class City(TimeStampedModel):
    title = models.CharField(max_length=50)
    zip_code = models.IntegerField(validators=[MinValueValidator(10000),
                                               MaxValueValidator(99999)])

    def __str__(self):
        return self.title


class House(TimeStampedModel):
    title = models.CharField(max_length=150)
    desc = models.TextField()
    address = models.CharField(max_length=200)
    city = models.ForeignKey(City,
                             related_name="city",
                             on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class PhotoHouse(TimeStampedModel):
    title = models.CharField(max_length=100)
    house = models.ForeignKey(House,
                              on_delete=models.CASCADE,
                              related_name="photos")
    main_photo = models.BooleanField(default=False)
    image = models.ImageField(upload_to="images")  # to do -> s3 integration

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        for i in House.objects.get(title=self.house).photos.all():
            if i.main_photo:
                self.main_photo = False

        return super(PhotoHouse, self).save(*args, **kwargs)


class HouseDetails(TimeStampedModel):
    house = models.OneToOneField(House,
                                 on_delete=models.CASCADE,
                                 primary_key=True,)
    rooms = models.IntegerField(default=0)
    qm = models.IntegerField(default=0, validators=[MinValueValidator(1),
                                                    MaxValueValidator(300)])
    beds = models.IntegerField(default=0)
    balcony = models.BooleanField(default=False)
    bathrooms = models.IntegerField(default=0)
    kitchen = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.house.title}'s' details"
