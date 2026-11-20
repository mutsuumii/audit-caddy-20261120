# Prototype pollution
# CWE-1321 | Severity: HIGH
# File: modules/caddyhttp/encode/testdata/caddy_asciinema_player.js line 1

**Risk:** Prototype mutation through user input affects all objects in the process.

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
