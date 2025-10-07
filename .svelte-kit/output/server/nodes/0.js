import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DUeJq-8Y.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/B7nNXRL2.js","_app/immutable/chunks/BF0MJrN5.js","_app/immutable/chunks/CdJTHtIT.js","_app/immutable/chunks/DyUZwKcl.js","_app/immutable/chunks/MV6Vy7dS.js","_app/immutable/chunks/C0uOHXAu.js","_app/immutable/chunks/BMnHDgkn.js"];
export const stylesheets = ["_app/immutable/assets/Header.BcSURFMU.css","_app/immutable/assets/0.NtkxGnAO.css"];
export const fonts = [];
