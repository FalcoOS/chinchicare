ChinchiCare – Sprachkorrektur (Deutsch, English, 中文)

Diese Version korrigiert die Sprachumschaltung auf der Anmelde- und Registrierungsseite:
- Die Auswahl Deutsch / English / 中文 übersetzt Überschrift, Beschreibung, E-Mail, Passwort, Platzhalter, Hauptbutton, Gastzugang und Umschaltbutton.
- Der Hauptbutton zeigt je nach Modus und Sprache den passenden Text.
- Die gewählte Sprache wird zwischen Anmeldeseite und App synchronisiert und für den nächsten Aufruf gespeichert.
- Die chinesische Übersetzungsroutine zeigt jetzt auf den tatsächlichen App-Container (#mainApp).
- Die vorhandenen App-Dateien und Funktionen bleiben im Paket enthalten.

Installation:
1. ZIP entpacken.
2. index.html, app.js, style.css und manifest.webmanifest im GitHub-Repository durch diese Version ersetzen.
3. Committen und warten, bis GitHub Pages veröffentlicht hat.
4. Auf dem iPhone die Seite neu laden. Bei einer alten zwischengespeicherten Version Safari-Cache leeren.

Prüfung:
JavaScript-Syntax wurde mit node --check geprüft. Ein vollständiger Browser-/Live-Test auf GitHub Pages war nicht möglich; bitte nach Veröffentlichung Anmeldung, Registrierung und Sprachwechsel jeweils testen.
