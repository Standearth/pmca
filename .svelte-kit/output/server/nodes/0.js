import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DMx9b5dB.js","_app/immutable/chunks/VyQfYt1W.js","_app/immutable/chunks/SDXbUWQJ.js","_app/immutable/chunks/B9qw8vzI.js","_app/immutable/chunks/Cswa3t-A.js","_app/immutable/chunks/Dw4UVNh4.js","_app/immutable/chunks/D2Fulok_.js","_app/immutable/chunks/DFo_Vv_N.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.BQW_epEu.css","_app/immutable/assets/Header.SZcKhyiG.css","_app/immutable/assets/0.NtkxGnAO.css"];
export const fonts = [];
