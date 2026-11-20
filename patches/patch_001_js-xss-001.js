# DOM XSS via innerHTML
# CWE-79 | Severity: HIGH
# File: modules/caddyhttp/encode/testdata/caddy_asciinema_player.js line 1

**Risk:** Setting innerHTML with user data allows script injection in other users' browsers.

**Fix:** Use textContent. If HTML is needed, sanitize with DOMPurify.sanitize() first.
