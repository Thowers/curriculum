from django.db import models

class ContactMessage(models.Model):
    ESTADOS = [
        ('PEN', 'Pendiente'),
        ('PRO', 'En Proceso'),
        ('RES', 'Resuelto'),
    ]

    nombre = models.CharField(max_length=150)
    email = models.EmailField()
    telefono = models.CharField(max_length=20, blank=True, null=True)
    asunto = models.CharField(max_length=200)
    mensaje = models.TextField()
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    estado = models.CharField(max_length=3, choices=ESTADOS, default='PEN')
    notas_internas = models.TextField(blank=True, null=True)
    origen = models.CharField(max_length=50, default="web")

    def __str__(self):
        return f"{self.nombre} - {self.asunto}"
