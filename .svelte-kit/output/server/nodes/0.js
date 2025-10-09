import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CPnniEvJ.js","_app/immutable/chunks/BoGM1SOC.js","_app/immutable/chunks/CMS7xYzi.js","_app/immutable/chunks/Ddk1tnyg.js","_app/immutable/chunks/CRni-glT.js","_app/immutable/chunks/BDiv2670.js","_app/immutable/chunks/D7EnXSfk.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.DNBk0uEp.css","_app/immutable/assets/Header.SZcKhyiG.css","_app/immutable/assets/0.NtkxGnAO.css"];
export const fonts = [];
