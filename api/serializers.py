from rest_framework import serializers
from .models import Timeline

class TimelineSerializer(serializers.ModelSerializer):
    """Serializer to map model instance to JSON format."""

    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        """Meta class to map serializer's fields with the model's fields."""
        model = Timeline
        fields = ('id','name','owner','date_created','date_modified')
        read_only_fields = ('date_created', 'date_modified')
