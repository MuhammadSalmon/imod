from django.contrib import admin
from .models import Product, News, Category, Vacancy, Image
# Register your models here.


admin.site.register(Product)
admin.site.register(News)
admin.site.register(Category)
admin.site.register(Vacancy)
admin.site.register(Image)