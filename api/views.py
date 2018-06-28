from django.shortcuts import render
from rest_framework import generics
from .serializers import TimelineSerializer
from .models import Timeline
from rest_framework import permissions
from .permissions import IsOwner

class CreateView(generics.ListCreateAPIView):
    """This class defines the create behaviour of the rest api."""
    queryset = Timeline.objects.all()
    serializer_class = TimelineSerializer
    permission_classes = (permissions.IsAuthenticated,IsOwner)

    def perform_create(self, serializer):
        """Save the post data when creaing a new bucketlist."""
        serializer.save(owner=self.request.user)

    def get_queryset(self):
        """Only return timeline items owned by the currently authenticated user."""
        user = self.request.user
        return Timeline.objects.filter(owner=user)

class DetailsView(generics.RetrieveUpdateDestroyAPIView):
    """This class handles the http GET, pUT, and DELETE requests."""

    queryset = Timeline.objects.all()
    serializer_class = TimelineSerializer
    permission_classes = (permissions.IsAuthenticated,IsOwner)

    
