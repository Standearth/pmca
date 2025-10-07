import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.p7yPllug.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/D4S9hLi-.js","_app/immutable/chunks/BthDBq65.js","_app/immutable/chunks/DSIBP9cT.js","_app/immutable/chunks/C39NlNcv.js","_app/immutable/chunks/DxpOQ2_T.js","_app/immutable/chunks/Ad_xzCde.js","_app/immutable/chunks/CkD9W3oy.js","_app/immutable/chunks/MJLOPqBc.js","_app/immutable/chunks/Bv03wdxo.js","_app/immutable/chunks/BA7S0VKz.js","_app/immutable/chunks/DUWTOlgu.js"];
export const stylesheets = ["_app/immutable/assets/Header.BcSURFMU.css","_app/immutable/assets/2.BUOPuiZn.css"];
export const fonts = [];
