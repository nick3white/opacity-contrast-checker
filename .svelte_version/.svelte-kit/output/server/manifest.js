export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["cat.jpg","favicon.png","tunnel.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CjhmMq2M.js","app":"_app/immutable/entry/app.DayokFdL.js","imports":["_app/immutable/entry/start.CjhmMq2M.js","_app/immutable/chunks/entry.BTSOUtm3.js","_app/immutable/chunks/scheduler.DpmkryvL.js","_app/immutable/chunks/index.CFrhX26m.js","_app/immutable/entry/app.DayokFdL.js","_app/immutable/chunks/scheduler.DpmkryvL.js","_app/immutable/chunks/index.CNYffL7q.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
