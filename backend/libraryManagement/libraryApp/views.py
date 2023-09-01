from django.shortcuts import render,redirect
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.models import User
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
from django.http import HttpResponse
from django.contrib.auth import get_user_model
User = get_user_model()
def isLoggedIn(request):
    if request.user.is_authenticated:
        return HttpResponse(True)
    else:
        return HttpResponse(False)
@csrf_exempt
def login(request):
    if request.method=='POST':
        data=request.POST
        email=data.get('email')
        password=data.get('password')
        print(email,password)
        user=authenticate(username=email,password=password)
        print(user)
        if user is not None:
            return HttpResponse("Logged in Successfully!!!")
        else:
            return HttpResponse("Invalid Credentials!!!")
def logoutUser(request):
    logout(request)
    return redirect('/login/')
@csrf_exempt
def register(request):
    print("in rgister")
    if request.method=='POST':
        data=request.POST
        userName=data.get('name')
        email=data.get('email')
        phone=data.get('phone')
        address=data.get('address')
        password=data.get('password')
        college=data.get('college')
        data=request
        print(data)
        print(userName,password,email,phone,college,address) 
        if User.objects.filter(email=email).exists():
            return HttpResponse("User already exists!!")
        else:
            user=User.objects.create_user(username=userName,password=password,email=email,phone=phone,address=address)
            return HttpResponse("Registered successfully!!")
def reg(request):
    print("aksfdkaskdfjk") 
    return HttpResponse("highly inflamable")