from rest_framework.permissions import BasePermission
from .models import Timeline

class IsOwner(BasePermission):
    """custom permission class to allow only Timeline owners to edit them."""

    def has_object_permission(self, request, view, obj):
        """Return True if permisison is granted to the Timeline owner."""
        if isinstance(obj, Timeline):
            return obj.owner == request.user
        return False
