from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    address=models.TextField()
    phone=models.BigIntegerField()
    college=models.CharField(max_length=200)