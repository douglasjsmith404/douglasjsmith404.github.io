import { c as create_ssr_component, d as each, e as escape } from './ssr-COp305H0.js';

const css = {
  code: "@media(min-width: 640px){.layout.svelte-1ubx6uq{display:grid;gap:2em;grid-template-columns:1fr 16em}}",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\n\\texport let data;\\n<\/script>\\n\\n<div class=\\"layout\\">\\n\\t<main>\\n\\t\\t<slot />\\n\\t</main>\\n\\n\\t<aside>\\n\\t\\t<h2>More posts</h2>\\n\\t\\t<ul>\\n\\t\\t\\t{#each data.summaries as { slug, title }}\\n\\t\\t\\t\\t<li>\\n\\t\\t\\t\\t\\t<a href=\\"/blog/{slug}\\">{title}</a>\\n\\t\\t\\t\\t</li>\\n\\t\\t\\t{/each}\\n\\t\\t</ul>\\n\\t</aside>\\n</div>\\n\\n<style>\\n\\t@media (min-width: 640px) {\\n\\t\\t.layout {\\n\\t\\t\\tdisplay: grid;\\n\\t\\t\\tgap: 2em;\\n\\t\\t\\tgrid-template-columns: 1fr 16em;\\n\\t\\t}\\n\\t}\\n</style>\\n\\n"],"names":[],"mappings":"AAsBC,MAAO,YAAY,KAAK,CAAE,CACzB,sBAAQ,CACP,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,GAAG,CACR,qBAAqB,CAAE,GAAG,CAAC,IAC5B,CACD"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="layout svelte-1ubx6uq"><main>${slots.default ? slots.default({}) : ``}</main> <aside><h2 data-svelte-h="svelte-6bkxio">More posts</h2> <ul>${each(data.summaries, ({ slug, title }) => {
    return `<li><a href="${"/blog/" + escape(slug, true)}">${escape(title)}</a> </li>`;
  })}</ul></aside> </div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-D4f4NVrN.js.map
