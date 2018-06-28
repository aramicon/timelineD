from django.test import TestCase
from .models import Timeline
from rest_framework.test import APIClient
from rest_framework import status
from django.urls import reverse
from django.contrib.auth.models import User




# Create your tests here.

class ModelTestCase(TestCase):
    """This class defines the test suite for the timeline model."""

    def setUp(self):
        """Define the text client and other setup variables."""
        self.timeline_name = "History of Now"
        user = User.objects.create(username="nerd1")
        self.timeline = Timeline(name = self.timeline_name,owner=user)

    def test_model_can_create_a_timeline(self):
        """Test the timeline model can create a timeline."""
        old_count = Timeline.objects.count()
        self.timeline.save()
        new_count = Timeline.objects.count()
        self.assertNotEqual(old_count,new_count)


class ViewTestCase(TestCase):
    """Test suite for the API views."""

    def setUp(self):
        """Define the test client and other test variables."""
        user = User.objects.create(username="nerd1")

        self.client = APIClient()
        self.client.force_authenticate(user=user)

        self.timeline_data = {'name':'History of stamps','owner':user.id}
        self.response = self.client.post(
            reverse('create'),
            self.timeline_data,
            format="json")

    def test_api_can_create_a_timeline(self):
        self.assertEqual(self.response.status_code, status.HTTP_201_CREATED)

    def test_authorization_is_enforced(self):
        """Test that the api has user authorization."""
        new_client = APIClient()
        response = new_client.get('/timelines/',kwargs={'pk':3},format='json')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_api_can_get_a_timeline(self):
        """Test the api can get a given timeline."""
        timeline = Timeline.objects.get()
        response = self.client.get(
        reverse('details', kwargs={'pk':timeline.id}),
        format="json")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertContains(response,timeline)

    def test_api_can_update_timeline(self):
        """Test that the api can update a given timeline."""
        timeline = Timeline.objects.get()
        change_timeline = {'name':'Tomorrowland'}
        res = self.client.put(
            reverse('details',kwargs={'pk':timeline.id}),
            change_timeline,
            format="json"
        )
        self.assertEqual(res.status_code,status.HTTP_200_OK)

    def test_api_can_delete_timeline(self):
        """Test that the api can delete a timeline."""
        timeline = Timeline.objects.get()
        response = self.client.delete(
            reverse('details',kwargs={'pk':timeline.id}),
            format="json",
            follow=True
        )
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
