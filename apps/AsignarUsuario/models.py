from django.db import models

        
class VallEmpleado(models.Model):
    id = models.IntegerField(primary_key=True)
    id_personal = models.IntegerField(unique=True)
    username = models.CharField(max_length=150)
    password = models.CharField(max_length=128)
    Nombre_ps = models.CharField(max_length=150)
    Apaterno_ps = models.CharField(max_length=150)
    Amaterno_ps = models.CharField(max_length=150)
    is_superuser = models.BooleanField()
    NombreCompleto = models.CharField(max_length=300)
    email = models.EmailField(max_length=254)
    date_joined = models.DateTimeField()
    RutaFoto_ps = models.CharField(max_length=200)
    Nombre_ct = models.CharField(max_length=200)
    nombre_direccion = models.CharField(max_length=200)
    nombre_coordinacion = models.CharField(max_length=200)
    is_active= models.BooleanField()
    

    class Meta:
        managed = False
        db_table = 'vAllEmpleados'
        
        

class TRegistroAccionesModulo(models.Model):
    NombreUsuario = models.CharField(max_length=255)
    Modulo = models.CharField(max_length=255)
    NombreAccion = models.CharField(max_length=255)
    FechaHora = models.DateTimeField()
    Descripcion = models.TextField(blank=True, null=True)
    IpUsuario = models.CharField(max_length=50, blank=True, null=True)
    UserAgent = models.CharField(max_length=255, blank=True, null=True)
    BrowserId = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'TRegistroAccionesModulo'

    def __str__(self):
        return f"{self.NombreUsuario} realizó '{self.NombreAccion}' en '{self.Modulo}' - {self.FechaHora} - {self.IpUsuario} "