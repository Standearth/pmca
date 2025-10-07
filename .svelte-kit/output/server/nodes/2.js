import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.D-6S20r8.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/J5wgies8.js","_app/immutable/chunks/BusZiAAh.js","_app/immutable/chunks/B3awkHMX.js","_app/immutable/chunks/DwB4xlT9.js","_app/immutable/chunks/CN1ovqas.js","_app/immutable/chunks/PbpK25by.js","_app/immutable/chunks/9Yy19gSI.js","_app/immutable/chunks/zI_Qgqo_.js","_app/immutable/chunks/CAefPET8.js","_app/immutable/chunks/BPcZjNdR.js","_app/immutable/chunks/ZlelfkvA.js","_app/immutable/chunks/D0kDTj-p.js"];
export const stylesheets = ["_app/immutable/assets/Header.BcSURFMU.css","_app/immutable/assets/2.Cgljygir.css"];
export const fonts = [];
