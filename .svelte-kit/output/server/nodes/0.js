import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.KdRW_DDU.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/Fd-96DPJ.js","_app/immutable/chunks/73buWMPW.js","_app/immutable/chunks/DIhWwPc_.js","_app/immutable/chunks/Nm6HsXid.js","_app/immutable/chunks/Yb6WkHeP.js","_app/immutable/chunks/fKiVqaHV.js"];
export const stylesheets = ["_app/immutable/assets/Header.BcSURFMU.css","_app/immutable/assets/0.NtkxGnAO.css"];
export const fonts = [];
