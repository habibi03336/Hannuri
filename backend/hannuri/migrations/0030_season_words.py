# Generated by Django 3.2.5 on 2022-06-14 13:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hannuri', '0029_remove_user_actingseason'),
    ]

    operations = [
        migrations.AddField(
            model_name='season',
            name='words',
            field=models.TextField(default='', verbose_name='단어 언급 횟수'),
        ),
    ]