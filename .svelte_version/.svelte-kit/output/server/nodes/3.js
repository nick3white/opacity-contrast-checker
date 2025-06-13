

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/csstest/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.aIcDzigk.js","_app/immutable/chunks/scheduler.DpmkryvL.js","_app/immutable/chunks/index.CNYffL7q.js"];
export const stylesheets = ["_app/immutable/assets/3.DEEZbCMo.css"];
export const fonts = [];
