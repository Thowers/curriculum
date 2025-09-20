from django import forms
from .models import ContactMessage

class ContactForm(forms.ModelForm):
    class Meta:
        model = ContactMessage
        fields = ["nombre", "email", "telefono", "asunto", "mensaje", "estado", "origen"]
        widgets = {
            "estado": forms.HiddenInput(),
            "origen": forms.HiddenInput(),
        }