import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DR3M-8d3.js","_app/immutable/chunks/CGM7W029.js","_app/immutable/chunks/Bt9sSbFh.js","_app/immutable/chunks/BhhFItnI.js","_app/immutable/chunks/BIgdFwSN.js","_app/immutable/chunks/CGWlNar8.js","_app/immutable/chunks/ibXNnmUs.js","_app/immutable/chunks/CKObTQoG.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.BQW_epEu.css","_app/immutable/assets/Header.SZcKhyiG.css","_app/immutable/assets/0.NtkxGnAO.css"];
export const fonts = [];
