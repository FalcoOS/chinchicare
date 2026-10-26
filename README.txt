ChinchiCare Complete

Dateien:
- index.html
- style.css
- app.js
- manifest.webmanifest

So aktualisierst du GitHub Pages:
1. Öffne https://github.com/FalcoOS/chinchicare
2. Öffne jede der vorhandenen Dateien index.html, style.css und app.js.
3. Ersetze den vollständigen Dateiinhalt durch den Inhalt der gleichnamigen Datei aus diesem Paket.
4. Lege manifest.webmanifest zusätzlich im Hauptverzeichnis an.
5. Committe die Änderungen in den Branch, den GitHub Pages verwendet (meist main).
6. Warte kurz und lade https://falcoos.github.io/chinchicare/ neu.

Wichtig:
- Die App speichert Profile, Gewichte, Klima, Notizen und Vorräte lokal auf diesem Gerät im Browser.
- Das ist kein Cloud-Sync. Daten sind nicht automatisch zwischen Geräten synchronisiert. Nutze „Daten exportieren“ als Backup.
- Fotos werden auf eine kleinere Größe komprimiert und lokal gespeichert.
- Für die Nutzung ist kein Konto nötig.
- Das Klimamodul verwendet nur manuell eingegebene Werte. Es misst keine Temperatur selbst.
- Medizinische Inhalte sind allgemeine Orientierung und ersetzen keine Tierarztpraxis.
- Teste die Dateien vor dem Einsatz mit echten Tieren. Dies ist eine umfangreiche Frontend-Prototyp-App, keine tierärztliche Software.


UI-FIX:
- Login/Registrierung ist eine eigene Vollbild-Ansicht.
- Die App-Inhalte werden beim Login/Gastzugang gezeigt, nicht unter dem Loginformular.
- Zum Aktualisieren index.html, style.css und app.js im GitHub-Repository ersetzen.
- Danach GitHub Pages neu laden; auf dem iPhone ggf. die Seite vollständig schließen und erneut öffnen.


ENGLISH LOGIN:
- Added a Deutsch/English language selector on the login screen.
- The change is limited to the login/registration screen; the rest of the app is left as-is.
- Replace index.html, style.css and app.js in the GitHub repository and commit the changes.


FIX INPUT + IPHONE BOTTOM BAR:
- Removed the auth-screen MutationObserver loop that could interfere with input responsiveness.
- Added iPhone safe-area spacing so the bottom navigation sits above the home indicator.
- Replace index.html, style.css and app.js in GitHub, then commit.


CHINESE LANGUAGE:
- Added Simplified Chinese (中文) to the language selector on the login/registration screen.
- The rest of the app has not been changed.
- Replace index.html and app.js in GitHub and commit the changes.


FULL APP TRANSLATION:
- Added Chinese translations across the app's existing translation keys.
- Language control now cycles Deutsch -> English -> 中文.
- Updated several placeholders, profile labels, navigation and weekly-plan text.
- Replace index.html and app.js in GitHub; CSS and manifest remain unchanged.
- Some article body copy and a few less common hard-coded messages may still need a dedicated translation pass.


LANGUAGE SYNC:
- Choosing Deutsch, English or 中文 on the login screen also updates the app language preference.
- Note: the main interface labels are translated, but some article body text and a few hard-coded notices may still need a final translation pass.


LANGUAGE SELECTOR + TRANSLATION FIX:
- Replaced the cycling language buttons with explicit dropdown selectors (Deutsch, English, 中文) in the top bar and Settings.
- The selected language is applied across the existing translation keys and Chinese static text map.
- This ZIP includes index.html, app.js and style.css. Replace all three in the GitHub repository and commit.
- JavaScript syntax was checked, but a live browser test has not been performed.


CRITICAL LANGUAGE FIX:
- Fixed the top language control: it is now a real select menu, not a button with a non-working change event.
- Fixed the translation root selector: the actual app container is #appMain, not #mainApp. This mismatch prevented the static Chinese translation routine from finding any page content.
- Added visible/clickable selector styling.
- Replace index.html, app.js and style.css in GitHub. Test on the published site after deployment.
