from django.contrib import admin
from django.urls import path, include
from .views import inicio

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', inicio, name="inicio"),
    path('contacto/', include('apps.contactame.urls')),
    path('preguntas/', include('apps.preguntas.urls')),
    path('musica/', include('apps.musica.urls')),
]
