import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.D9PqRXu9.js","_app/immutable/chunks/C8FFzEQw.js","_app/immutable/chunks/jQ12fRz9.js","_app/immutable/chunks/b9gDK-Ti.js","_app/immutable/chunks/DoqlwY0V.js","_app/immutable/chunks/D6SwNvd5.js","_app/immutable/chunks/DSsN465D.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.DNBk0uEp.css","_app/immutable/assets/Header.SZcKhyiG.css","_app/immutable/assets/0.NtkxGnAO.css"];
export const fonts = [];
