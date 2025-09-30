from django.db import models

class Musica(models.Model):
    titulo = models.CharField(max_length=200)
    artista = models.CharField(max_length=200)
    descripcion = models.TextField(blank=True, null=True)
    imagen = models.URLField(help_text="URL de la carátula del álbum")
    spotify_link = models.URLField(help_text="Link al álbum en Spotify")

    def __str__(self):
        return f"{self.titulo} - {self.artista}"
