# Generated by Django 4.1.4 on 2023-01-15 22:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='user_profile_type',
            new_name='profile_type',
        ),
    ]
