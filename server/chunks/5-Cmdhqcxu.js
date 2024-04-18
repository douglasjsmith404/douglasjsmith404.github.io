import { p as posts } from './data-CRHv4vE6.js';

function load() {
  return {
    summaries: posts.map((post) => ({
      slug: post.slug,
      title: post.title
    }))
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Cjpq5SL6.js')).default;
const server_id = "src/routes/blog/+page.server.js";
const imports = ["_app/immutable/nodes/5.DUbPCMDQ.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CSVJPJho.js","_app/immutable/chunks/each.D6YF6ztN.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-Cmdhqcxu.js.map
