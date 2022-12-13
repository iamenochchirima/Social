# Generated by Django 3.2.12 on 2022-12-13 17:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0009_alter_profile_country'),
        ('posts', '0002_alter_post_liked'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='posts', to='main.profile'),
        ),
    ]
