import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.CdJdEvdW.js","_app/immutable/chunks/DJKjfDzx.js","_app/immutable/chunks/CSgtqWaa.js","_app/immutable/chunks/CAQvlpFj.js","_app/immutable/chunks/DMDcgj6f.js","_app/immutable/chunks/BR_RWnGW.js","_app/immutable/chunks/DPozTIBp.js","_app/immutable/chunks/Da3QqUQq.js","_app/immutable/chunks/B-cAxwXp.js","_app/immutable/chunks/D5fUN1fw.js","_app/immutable/chunks/BAOrvfls.js"];
export const stylesheets = ["_app/immutable/assets/TapeTransition.BuHYnLHs.css","_app/immutable/assets/PopupModal.BQW_epEu.css","_app/immutable/assets/Header.Cze5M2vm.css","_app/immutable/assets/2.DfC2khDL.css"];
export const fonts = [];
