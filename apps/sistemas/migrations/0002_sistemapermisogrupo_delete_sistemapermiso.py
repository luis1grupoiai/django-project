# Generated by Django 4.2.7 on 2023-12-07 23:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0013_alter_permission_managers_permission_created_at_and_more'),
        ('sistemas', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='SistemaPermisoGrupo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('grupo', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='auth.group')),
                ('permiso', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='auth.permission')),
                ('sistema', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='sistemas.sistemas')),
            ],
            options={
                'verbose_name': 'Sistemas Permisos Grupos',
                'verbose_name_plural': 'Sistemas Permisos Grupos',
                'unique_together': {('sistema', 'permiso', 'grupo')},
            },
        ),
        migrations.DeleteModel(
            name='SistemaPermiso',
        ),
    ]
