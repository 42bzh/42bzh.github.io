# Offline web (0.1.0)

Static build of the Offline mesh UI (Rust **release** WASM + Vite).

- **Client:** `0.1.0`
- **Protocol:** `bitchat-mesh/1`
- **WASM:** `release (548867 bytes)`
- **Built:** `20261024T155157Z`

## Deploy

Upload the contents of this archive to any static host (nginx, S3, Cloudflare Pages, GitHub Pages, …).

```bash
# quick local check
npx --yes serve -l 8080 .
```

Chrome / Edge can **Connect phone** via Web Bluetooth. Safari and Firefox cannot advertise or use Web Bluetooth for mesh join.
