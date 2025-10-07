import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DycL3G62.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/CapwKxFb.js","_app/immutable/chunks/D-yX5OqO.js","_app/immutable/chunks/B8DPCULC.js","_app/immutable/chunks/QHBhHuq9.js","_app/immutable/chunks/B6xa3oUU.js","_app/immutable/chunks/ER89FC2_.js","_app/immutable/chunks/VnrF2emb.js","_app/immutable/chunks/DVPZvmGb.js"];
export const stylesheets = ["_app/immutable/assets/Header.BcSURFMU.css","_app/immutable/assets/0.NtkxGnAO.css"];
export const fonts = [];
