from django.urls import path, include
from rest_framework.routers import DefaultRouter
from hannuri import views


router = DefaultRouter()
router.register(r'user', views.UserViewSet)
router.register(r'season', views.SeasonViewSet)
router.register(r'notification', views.NotificationViewSet)
router.register(r'session', views.SessionViewSet)
router.register(r'sessionReadfile', views.SessionReadfileViewSet)
router.register(r'detgori', views.DetgoriViewSet)
router.register(r'freeNote', views.FreeNoteViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('login/', views.Login),
    path('signin/', views.Signin),
    path('logout/', views.Logout),
    path('profileColor/', views.ProfileColor),
    path('wordList/<str:type>/<int:sessionId>', views.WordList),
    path('mypageInfo', views.MypageInfo),
    path('frontError/', views.FrontError),
    path('logEverything/', views.LogEverything),
    path('archive/', views.ArchiveView)
]