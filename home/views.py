from django.shortcuts import render
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login as auth_login , logout as auth_logout


# myapp/views.py
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login

def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            auth_login(request, user)
            print("inside")
            return redirect('upload')
        else:
            print("outside")
            return render(request, 'home/login.html', {'error': 'Invalid credentials'})
    return render(request, 'home/login.html')

def upload_view(request):
    # Add your logic for the upload page here
    return render(request, 'home/upload.html')

def upload_view(request):
    if request.method == 'POST' and request.FILES.get('file'):
        uploaded_file = request.FILES['file']
        with open('uploads/' + uploaded_file.name, 'wb') as file:
            for chunk in uploaded_file.chunks():
                file.write(chunk)
        return render(request, 'home/upload.html', {'success_message': 'File uploaded successfully.'})
    return render(request, 'home/upload.html')


def home(request):
    return render(request, 'home/home.html')


def logout_view(request):
    auth_logout(request)
    return redirect('login')