import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.C6ym5ZKm.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/B7nNXRL2.js","_app/immutable/chunks/BMnHDgkn.js","_app/immutable/chunks/DxjC_qfS.js","_app/immutable/chunks/MV6Vy7dS.js","_app/immutable/chunks/YoESbXAK.js","_app/immutable/chunks/t4cdKXw4.js","_app/immutable/chunks/DQpHND14.js","_app/immutable/chunks/BF0MJrN5.js","_app/immutable/chunks/C0uOHXAu.js","_app/immutable/chunks/D1jJ5gOq.js","_app/immutable/chunks/CdJTHtIT.js","_app/immutable/chunks/DyUZwKcl.js"];
export const stylesheets = ["_app/immutable/assets/Header.BcSURFMU.css","_app/immutable/assets/2.CGIQBDKn.css"];
export const fonts = [];
