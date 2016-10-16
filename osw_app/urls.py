from django.conf.urls import patterns, include, url
from osw_app.views import *
from osw_app import views
urlpatterns = [
	url(r'^test',test),
	url(r'^adduser',adduser),
	url(r'^success', register_success),
	url(r'^$', views.home, name='home'),
]