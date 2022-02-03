from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from utils.models import TimeStampedModel


class House(TimeStampedModel):
    title = models.CharField(max_length=150)
    desc = models.TextField()
    address = models.CharField(max_length=200)
    qm = models.IntegerField(validators=[MinValueValidator(1),
                                         MaxValueValidator(300)])

    def __str__(self):
        return self.title
