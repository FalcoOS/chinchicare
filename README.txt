ChinchiCare – Auth & Visual Refresh

Files: index.html, app.js, style.css, manifest.webmanifest, README.txt

This update centralizes the authentication translations inside the main app closure so they can safely access the current language and login/signup mode. It removes the previous second translation script that referenced variables outside its scope and could throw a ReferenceError. It also refreshes the login card styling and adds a localized rotating chinchilla-care tip.

Deploy all five files together to the root of the existing GitHub Pages repository. After deployment, test German, English, and Chinese on the login and signup screens, including the login button, guest option, placeholders, language toggle, and rotating tip.

Note: JavaScript syntax and basic structural checks were run locally. The published site and live Supabase authentication were not browser-tested in this environment.
