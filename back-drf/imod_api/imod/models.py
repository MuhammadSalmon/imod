from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    name = models.CharField(max_length=255)
    
    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='products/', null=True, blank=True)  # Image field for product

    def __str__(self):
        return self.name

class News(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    custom_date = models.DateTimeField(null=True, blank=True)
    def __str__(self):
        return self.title

class Image(models.Model):
    news = models.ForeignKey(News, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='news_images/')

    def __str__(self):
        return f"Image for {self.news.title}"

class Vacancy(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    location = models.CharField(max_length=255)
    image = models.ImageField(upload_to='vacancies/', null=True, blank=True)  # Image field for vacancy

    def __str__(self):
        return self.title
