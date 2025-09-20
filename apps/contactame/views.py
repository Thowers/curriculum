from django.shortcuts import render, redirect
from .forms import ContactForm

def contacto(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("inicio")  # Cambia "inicio" por la ruta que quieras después de enviar
    else:
        form = ContactForm(initial={"estado": "PEN", "origen": "web"})

    return render(request, "pages/contacto.html", {"form": form})