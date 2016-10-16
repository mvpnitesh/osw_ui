from django.shortcuts import render
from osw_app.models import *
import json
from osw_app.forms import *
from osw_app.models import *
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from django.views.decorators.csrf import csrf_protect
from django.shortcuts import render_to_response
from django.http import HttpResponseRedirect
from django.template import RequestContext
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import logging
logger = logging.getLogger(__name__)

@csrf_exempt
def test(request):
	print "test"
	return render_to_response('test.html',)

@login_required(login_url="login/")
def home(request):
    return render(request,"home.html")

@csrf_exempt
def adduser(request):
    errors = []
    if request.method == 'POST':

            # # Opening a new image with user_id as name of the image

            # photo_url = "/samagra/photos/usermaster/"+user_id+".jpg"
            # user_photo = open(photo_url,"wb+")

            # if request.POST.get('photo')!='':
            #     photo = request.FILES['photo']
            #     # reading photo in chunk's
            #     for chunk in photo.chunks():
            #         user_photo.write(chunk)
            #     user_photo.close()
            # else:
            #     photo_url = "/samagra/photos/usermaster/user.jpg"

            # encryptying password
            location = request.POST['location']
            location_name =""
            if location == "1":
            	location_name="Bangalore"
            else:
            	location_name="Nodia"
            print location_name

            osw_user = OswUsers(user_id = request.POST['email_id'],username=request.POST['username'],
	            	password=request.POST['password'],mobile=request.POST['mobile'],location=location_name)
            osw_user.save()
            return HttpResponseRedirect('/success')
    else:
        form = RegistrationForm()
    variables = RequestContext(request, {'form': form})

    return render_to_response('login.html',variables,)

def register_success(request):
    return render_to_response('success.html',)