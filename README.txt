ChinchiCare Pro · Installationshinweise

Dateien:
- index.html
- style.css
- app.js

GitHub Pages:
1. Öffne dein Repository.
2. Ersetze die drei gleichnamigen Dateien im Stammverzeichnis (nicht in einem Unterordner).
3. Committe die Änderungen.
4. Öffne die veröffentlichte Seite nach einigen Minuten neu. Bei altem Stand Browser-Cache berücksichtigen.

Sprache:
Der Sprachwähler oben rechts ist sowohl auf der Anmelde-/Registrierungsseite als auch in der App verfügbar. Die Auswahl wird lokal gespeichert.

Daten:
- Gastmodus speichert lokal auf diesem Gerät.
- Mit Konto werden Daten über Supabase synchronisiert, sofern das Projekt korrekt konfiguriert ist.
- Erforderlich ist public.app_state mit user_id (uuid, primary key, FK auf auth.users), data (jsonb), updated_at (timestamptz) und RLS-Policy, die nur auth.uid() = user_id zulässt.
- Supabase Auth muss aktiviert sein.
- Das Frontend nutzt einen Publishable Key. Niemals einen service_role- oder Secret-Key in die Website eintragen.
- Vor dem Ersetzen vorhandene Dateien und Daten sichern.

Wichtig:
Dies ist eine umfangreiche Prototyp-Version, keine tierärztliche Diagnose und keine geprüfte Produktionssoftware. Die Inhalte dienen als allgemeine Orientierung. Bei Warnzeichen, Fressunlust, wenig/keinem Kot, Atemnot, Schwäche oder Überhitzung sofort eine chinchilla-erfahrene Tierarztpraxis kontaktieren.
Cloud-Synchronisation und Kontofunktionen müssen nach dem Upload mit einem Testkonto geprüft werden. Bitte in Supabase Auth-URLs/Redirects auf die veröffentlichte GitHub-Pages-Adresse einstellen.