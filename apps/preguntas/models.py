from django.db import models

class Pregunta(models.Model):
    pregunta = models.CharField(max_length=255)
    respuesta = models.TextField()
    estado = models.BooleanField(default=True)

    def __str__(self):
        return self.pregunta