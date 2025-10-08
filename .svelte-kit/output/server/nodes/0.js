import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.ZqwylmiE.js","_app/immutable/chunks/DCKjsh0j.js","_app/immutable/chunks/CxkseGyt.js","_app/immutable/chunks/B0NKjzMS.js","_app/immutable/chunks/DK_2_GuF.js","_app/immutable/chunks/cfLirrx7.js","_app/immutable/chunks/RrpnwaSH.js","_app/immutable/chunks/C8n6O-IB.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.BQW_epEu.css","_app/immutable/assets/Header.SZcKhyiG.css","_app/immutable/assets/0.NtkxGnAO.css"];
export const fonts = [];
