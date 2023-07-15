from django.urls import path
from . import views

app_name = 'posts'

urlpatterns = [
    path('create/', views.CreatePostAPIView.as_view(), name='create-post'),
    path('get-posts/', views.PostListAPIView.as_view(), name='post-list'),
    path('get-categories/', views.CategoryListAPIView.as_view(), name='category-list'),
    path('detail/<int:pk>', views.PostDetailAPIView.as_view(), name='post-detail'),
    path('update/<int:pk>', views.PostUpdateAPIView.as_view(), name='post-update'),
    path('delete/<int:pk>', views.PostDeleteAPIView.as_view(), name='post_delete'),
    path('like/', views.LikeAPIView.as_view(), name='like'),
    path('unlike/', views.UnlikeAPIView.as_view(), name='unlike'),
]
