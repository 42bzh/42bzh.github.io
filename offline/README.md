# Offline web (0.1.0)

Static build of the Offline mesh UI (Rust **release** WASM + Vite).

- **Client:** `0.1.0`
- **Protocol:** `bitchat-mesh/1`
- **WASM:** `release (548867 bytes)`
- **Built:** `20261024T155639Z`

## Deploy

Upload **this whole folder** (keep `index.html` beside `assets/`) to any static host.
Scripts and WASM use **relative** paths (`./assets/…`), so the site works at a
subpath or when the archive root is not the domain root.

```bash
# quick local check
npx --yes serve -l 8080 .
```

Chrome / Edge can **Connect to the mesh** via Web Bluetooth. Safari and Firefox cannot use Web Bluetooth for mesh join.
