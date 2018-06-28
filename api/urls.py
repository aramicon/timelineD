from django.conf.urls import url, include, re_path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import CreateView, DetailsView
from rest_framework.authtoken.views import obtain_auth_token
from django.views.generic import TemplateView

urlpatterns = {
    url(r'^auth/', include('rest_framework.urls',namespace='rest_framework')),
    url(r'^timelines/$', CreateView.as_view(), name="create"),
    url(r'^timelines/(?P<pk>[0-9]+)/$', DetailsView.as_view(), name="details"),
    url(r'^get-token/', obtain_auth_token),
    url(r'^get-token/', obtain_auth_token),
    re_path('timelinesapp/.*',TemplateView.as_view(template_name='index.html')),
}

urlpatterns = format_suffix_patterns(urlpatterns)
