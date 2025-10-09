import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CsdzqpWC.js","_app/immutable/chunks/BXWWcDRM.js","_app/immutable/chunks/DHJOhxdI.js","_app/immutable/chunks/D9Nkj761.js","_app/immutable/chunks/CZwbJdGJ.js","_app/immutable/chunks/B2Owb-5d.js","_app/immutable/chunks/CVZ67Ch-.js","_app/immutable/chunks/CtxLvZKc.js","_app/immutable/chunks/BEhKJRox.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.DNBk0uEp.css","_app/immutable/assets/Header.SZcKhyiG.css","_app/immutable/assets/0.NtkxGnAO.css"];
export const fonts = [];
