const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CV3_1_oD.js","app":"_app/immutable/entry/app.x9nYtRHT.js","imports":["_app/immutable/entry/start.CV3_1_oD.js","_app/immutable/chunks/entry.BaZrNBX1.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.x9nYtRHT.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CSVJPJho.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-DFyRjnuU.js')),
			__memo(() => import('./chunks/1-CFPjA6XI.js')),
			__memo(() => import('./chunks/2-DB2nrJt2.js')),
			__memo(() => import('./chunks/3-7pVrA8kl.js')),
			__memo(() => import('./chunks/4-Ajn4TLPp.js')),
			__memo(() => import('./chunks/5-Cmdhqcxu.js')),
			__memo(() => import('./chunks/6-DDj5GBvL.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
