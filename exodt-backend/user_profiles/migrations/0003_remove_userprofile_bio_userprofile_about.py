# Generated by Django 4.1.4 on 2023-04-29 16:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_profiles', '0002_alter_userprofile_bio'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofile',
            name='bio',
        ),
        migrations.AddField(
            model_name='userprofile',
            name='about',
            field=models.TextField(blank=True, max_length=1000, null=True),
        ),
    ]