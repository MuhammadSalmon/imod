from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, ProductViewSet, NewsViewSet, VacancyViewSet

# Create a router and register our viewsets with it
router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)
router.register(r'news', NewsViewSet)
router.register(r'vacancies', VacancyViewSet)

# The API URLs are now determined automatically by the router
urlpatterns = [
    path('api/', include(router.urls)),
    
]
