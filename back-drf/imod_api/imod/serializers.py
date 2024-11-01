from rest_framework import serializers
from .models import Category, Product, News, Vacancy, Image

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
        extra_kwargs = {
            'image': {'required': False},  # Set required to False if image is optional
        }

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['id', 'image']

class NewsSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, read_only=True)
    
    class Meta:
        model = News
        fields = ['id', 'title', 'content', 'created_at', 'author', 'images']

class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = '__all__'
       
        def validate_name(self, value):
            if Category.objects.filter(name=value).exists():
                raise serializers.ValidationError("Category with this name already exists.")
            return value
