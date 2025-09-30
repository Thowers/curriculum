from django.shortcuts import render
from .models import Musica

def musica(request):
    albums = Musica.objects.all()
    return render(request, "pages/musica.html", {"albums": albums})