import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.CHoycWML.js","_app/immutable/chunks/C_1nMqcQ.js","_app/immutable/chunks/ptKbBcbR.js","_app/immutable/chunks/BCpkZgCP.js","_app/immutable/chunks/akwchsNF.js","_app/immutable/chunks/CK8iMfbp.js","_app/immutable/chunks/Cn0oOOox.js","_app/immutable/chunks/BdW1tfG_.js","_app/immutable/chunks/BeEFP0vi.js","_app/immutable/chunks/D3MvYBbU.js","_app/immutable/chunks/BXvKLzoZ.js"];
export const stylesheets = ["_app/immutable/assets/TapeTransition.BuHYnLHs.css","_app/immutable/assets/PopupModal.BQW_epEu.css","_app/immutable/assets/Header.BcSURFMU.css","_app/immutable/assets/2.C7FMLS-D.css"];
export const fonts = [];
