from django.shortcuts import render
from .models import Pregunta

def preguntas(request):
    faqs = Pregunta.objects.filter(estado=True)
    return render(request, 'pages/preguntas.html', {'faqs': faqs})