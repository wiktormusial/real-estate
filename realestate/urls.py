from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include

urlpatterns = [
    path('', include('houses.urls')),
    path('admin/', admin.site.urls),
    path('accounts/', include('django.contrib.auth.urls')),
    path('api/v1/', include('api.urls'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
