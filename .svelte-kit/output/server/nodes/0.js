import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.B90MiTmv.js","_app/immutable/chunks/DJKjfDzx.js","_app/immutable/chunks/CSgtqWaa.js","_app/immutable/chunks/B-cAxwXp.js","_app/immutable/chunks/D5fUN1fw.js","_app/immutable/chunks/BR_RWnGW.js","_app/immutable/chunks/CAQvlpFj.js","_app/immutable/chunks/BAOrvfls.js","_app/immutable/chunks/DPozTIBp.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.BQW_epEu.css","_app/immutable/assets/Header.Cze5M2vm.css","_app/immutable/assets/0.NtkxGnAO.css"];
export const fonts = [];
