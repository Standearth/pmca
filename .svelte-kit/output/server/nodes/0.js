import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DaDcJPSz.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/J5wgies8.js","_app/immutable/chunks/zI_Qgqo_.js","_app/immutable/chunks/CAefPET8.js","_app/immutable/chunks/D0kDTj-p.js","_app/immutable/chunks/BPcZjNdR.js","_app/immutable/chunks/DwB4xlT9.js","_app/immutable/chunks/BusZiAAh.js"];
export const stylesheets = ["_app/immutable/assets/Header.BcSURFMU.css","_app/immutable/assets/0.NtkxGnAO.css"];
export const fonts = [];
