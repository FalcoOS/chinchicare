# ChinchiCare Cloud v2.1

Diese Version ergänzt die Web-App um Supabase-E-Mail-Anmeldung und private Cloud-Synchronisierung.

## Einrichtung
1. Führe `SUPABASE_SQL.sql` im Supabase SQL Editor aus.
2. In Supabase Authentication → URL Configuration setze Site URL auf `https://falcoos.github.io` und ergänze Redirect URL `https://falcoos.github.io/**`.
3. Ersetze die bisherigen Projektdateien im GitHub-Repository durch diese Dateien. `index.html` muss im Hauptverzeichnis liegen.
4. Öffne ChinchiCare, tippe auf „Cloud anmelden“ und registriere dich.

## Sicherheit und Grenzen
Die App verwendet nur die Project URL und den publishable key. Niemals service_role oder Secret Key in Frontend-Code verwenden. `app_state` ist mit Row Level Security geschützt. Fotos werden vorerst im JSON-Datensatz gespeichert; das eignet sich für kleine Tests, nicht für große Mengen oder breite Veröffentlichung. Für Fotos sollte als nächster Schritt ein privater Supabase Storage Bucket mit passenden Policies eingerichtet werden. Vor Veröffentlichung sind Authentifizierung, Passwort-Wiederherstellung, Datenlöschung, Datenschutz und Limits zu testen.
