import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.DVd0L5gK.js","_app/immutable/chunks/CUgZETDo.js","_app/immutable/chunks/Dnuyipu4.js","_app/immutable/chunks/abZ7wM1l.js","_app/immutable/chunks/DtAbdk1r.js","_app/immutable/chunks/FSXOgFeK.js","_app/immutable/chunks/DBn9y5x6.js","_app/immutable/chunks/Cq5mz8YO.js","_app/immutable/chunks/DVYdw5hA.js","_app/immutable/chunks/wYm5nfvp.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.BQW_epEu.css","_app/immutable/assets/TapeTransition.L9I856-o.css","_app/immutable/assets/Header.nh09NX4P.css","_app/immutable/assets/2.DfC2khDL.css"];
export const fonts = [];
