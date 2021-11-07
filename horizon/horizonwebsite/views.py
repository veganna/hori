from django.shortcuts import render

# Create your views here.
def index(request):

    return render(request, "index.html")
def austinresume(request):

    return render(request, "austin.html")
def amzexample(request):

    return render(request, "amzexample.html")
def realestate(request):

    return render(request, "realestate.html")
def highstatus(request):

    return render(request, "highstatus.html")
def linkedin(request):

    return render(request, "linkedin.html")