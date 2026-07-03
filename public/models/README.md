# /public/models

Drop your real 3D assets here using **exactly** these filenames — nothing
else in the app needs to change:

| Dish             | Android / web (required) | iOS Quick Look (optional) |
|------------------|---------------------------|----------------------------|
| Chocolate Cake   | `chocolate-cake.glb`       | `chocolate-cake.usdz`      |
| Grilled Sandwich | `grilled-sandwich.glb`     | `grilled-sandwich.usdz`    |
| Momos            | `momos.glb`                | `momos.usdz`               |
| Pastry           | `pastry.glb`               | `pastry.usdz`              |
| Zinger Burger    | `zinger-burger.glb`        | `zinger-burger.usdz`       |

Notes:

- `.glb` powers the in-browser 3D preview, Android Scene Viewer and WebXR.
- `.usdz` is only used for iOS Quick Look. If it's missing, iOS visitors
  simply won't see the "View on your table" AR button, but the 3D preview
  and Android/WebXR flow keep working.
- The site checks this folder on the server for every request to `/menu`,
  so files just need to be present — no code or config changes required.
- Until a file exists, that dish's card shows "3D model not available."
  instead of a broken viewer.
- Keep files reasonably optimized (ideally < 10–15MB) for a fast AR launch
  on mobile data. Draco compression is supported by `<model-viewer>`.
