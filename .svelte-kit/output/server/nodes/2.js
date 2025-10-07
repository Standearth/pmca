import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.BtXI0yMS.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/CapwKxFb.js","_app/immutable/chunks/DVPZvmGb.js","_app/immutable/chunks/CoSx1yUC.js","_app/immutable/chunks/ER89FC2_.js","_app/immutable/chunks/CPBmD6ow.js","_app/immutable/chunks/Bx8wqkNZ.js","_app/immutable/chunks/qS7nEnlw.js","_app/immutable/chunks/D-yX5OqO.js","_app/immutable/chunks/B8DPCULC.js","_app/immutable/chunks/VnrF2emb.js","_app/immutable/chunks/umw_tuHS.js","_app/immutable/chunks/QHBhHuq9.js","_app/immutable/chunks/B6xa3oUU.js"];
export const stylesheets = ["_app/immutable/assets/Header.BcSURFMU.css","_app/immutable/assets/2.CGIQBDKn.css"];
export const fonts = [];
