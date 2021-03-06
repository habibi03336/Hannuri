# Generated by Django 3.2.5 on 2021-08-14 13:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hannuri', '0012_auto_20210811_1912'),
    ]

    operations = [
        migrations.CreateModel(
            name='SocialActivityImg',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.ImageField(upload_to='')),
                ('googleId', models.CharField(blank=True, max_length=200, verbose_name='구글id')),
                ('parentSocialActivity', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='imgs', to='hannuri.socialactivity', verbose_name='활동이름')),
            ],
        ),
    ]
