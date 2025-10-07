import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.o156nTL2.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/BG6AAHqK.js","_app/immutable/chunks/CRnNFKNR.js","_app/immutable/chunks/CDhKbxT1.js","_app/immutable/chunks/B9dsiKCx.js","_app/immutable/chunks/BIXTSnDo.js","_app/immutable/chunks/Cuwf8bRi.js","_app/immutable/chunks/Dd9Uve4A.js","_app/immutable/chunks/CTiQNl_T.js","_app/immutable/chunks/CYGXxWkR.js","_app/immutable/chunks/3eldqmCg.js","_app/immutable/chunks/DAUQhyE9.js","_app/immutable/chunks/DQn-22ah.js","_app/immutable/chunks/BSUttlkD.js","_app/immutable/chunks/DhKfHaxT.js"];
export const stylesheets = ["_app/immutable/assets/Header.BcSURFMU.css","_app/immutable/assets/TapeTransition.BuHYnLHs.css","_app/immutable/assets/PopupModal.BQW_epEu.css","_app/immutable/assets/2.Cb_H-a7l.css"];
export const fonts = [];
