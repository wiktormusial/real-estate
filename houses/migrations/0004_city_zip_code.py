# Generated by Django 4.0.2 on 2022-02-03 23:46

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('houses', '0003_photohouse'),
    ]

    operations = [
        migrations.AddField(
            model_name='city',
            name='zip_code',
            field=models.IntegerField(default=51427, validators=[django.core.validators.MinValueValidator(10000), django.core.validators.MaxValueValidator(99999)]),
            preserve_default=False,
        ),
    ]
