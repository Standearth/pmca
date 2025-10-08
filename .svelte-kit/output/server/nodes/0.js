import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.prAoki7y.js","_app/immutable/chunks/CYNXkTd-.js","_app/immutable/chunks/DIfVUDBB.js","_app/immutable/chunks/BpAkUsKN.js","_app/immutable/chunks/Bf-up44X.js","_app/immutable/chunks/KiC1FmTW.js","_app/immutable/chunks/FNSJemoa.js","_app/immutable/chunks/BRvyymRa.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.BQW_epEu.css","_app/immutable/assets/Header.SZcKhyiG.css","_app/immutable/assets/0.NtkxGnAO.css"];
export const fonts = [];
