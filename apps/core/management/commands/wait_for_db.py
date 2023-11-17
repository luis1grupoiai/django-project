from django.core.management.base import BaseCommand
from django.db import connection
from django.db.utils import OperationalError
from time import sleep

class Command(BaseCommand):
    help = "Wait for DB Connection"

    def handle(self, *args, **options):
        self.stdout.write('Waiting for DB')
        db_conn = False

        while not db_conn:
            try:
                c = connection.cursor()
                c.execute('SELECT 1')
                db_conn = True
            except OperationalError:
                self.stdout.write('DB unavailable, waiting 1 second...')
                sleep(1)
        self.stdout.write(self.style.SUCCESS('DB available!'))    

