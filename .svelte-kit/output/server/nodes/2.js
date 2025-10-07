import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.D202Jeza.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/Fd-96DPJ.js","_app/immutable/chunks/VoNKw9cs.js","_app/immutable/chunks/yAuDribc.js","_app/immutable/chunks/Yb6WkHeP.js","_app/immutable/chunks/DSoZME3v.js","_app/immutable/chunks/BQO0NfTB.js","_app/immutable/chunks/4m-gYTGN.js","_app/immutable/chunks/73buWMPW.js","_app/immutable/chunks/Nm6HsXid.js","_app/immutable/chunks/BBSKkCM2.js","_app/immutable/chunks/DKoPl9X4.js"];
export const stylesheets = ["_app/immutable/assets/Header.BcSURFMU.css","_app/immutable/assets/2.BUOPuiZn.css"];
export const fonts = [];
