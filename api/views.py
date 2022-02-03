from rest_framework.views import APIView
from rest_framework.response import Response


class IndexView(APIView):
    def get(self, *args, **kwargs):
        return Response("Hello!")
