from django.conf import settings
from django.db import models


class Product(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=255,
    )
    price = models.BigIntegerField()
    description = models.TextField()
