# Generated by Django 4.1.4 on 2023-02-06 15:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0009_message_archived_message_pinned'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='message',
            name='archived',
        ),
        migrations.RemoveField(
            model_name='message',
            name='pinned',
        ),
    ]