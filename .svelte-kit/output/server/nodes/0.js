import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DHiZoJTz.js","_app/immutable/chunks/DF2TzUtJ.js","_app/immutable/chunks/PJW6Ty7q.js","_app/immutable/chunks/lzm0yG9T.js","_app/immutable/chunks/DX1Q3Ctn.js","_app/immutable/chunks/gAR7uIZd.js","_app/immutable/chunks/CTMDvVWy.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.DNBk0uEp.css","_app/immutable/assets/Header.SZcKhyiG.css","_app/immutable/assets/0.NtkxGnAO.css"];
export const fonts = [];
