ChinchiCare Neu

Enthalten:
- index.html
- style.css
- app.js

Installation auf GitHub Pages:
1. Repository FalcoOS/chinchicare öffnen.
2. Die drei vorhandenen Dateien index.html, style.css und app.js jeweils durch die gleichnamigen Dateien aus diesem Paket ersetzen.
3. Jede Datei einzeln committen, oder alle Dateien gemeinsam hochladen und committen.
4. Einige Minuten warten und die Website in Safari neu laden.

Daten:
- Ohne Anmeldung werden Profile, Gewicht und Aufgaben lokal im Browser gespeichert.
- Fotos werden lokal im Browser gespeichert. Sehr große Bilder werden abgewiesen.
- Die optionale Supabase-Anmeldung verwendet die Projekt-URL und den Publishable Key, die für dieses Projekt eingerichtet wurden.
- Cloud-Sync benötigt eine public.app_state Tabelle mit RLS-Regel, die nur auth.uid() = user_id zulässt.
- Das Paket ersetzt nicht die Notwendigkeit, Supabase Auth und RLS korrekt zu konfigurieren.

Hinweis:
Der Klima-Check ist nur eine allgemeine Orientierung und kein tierärztlicher Rat. Bei Überhitzungsverdacht oder Krankheit bitte sofort tierärztliche Hilfe einholen.
