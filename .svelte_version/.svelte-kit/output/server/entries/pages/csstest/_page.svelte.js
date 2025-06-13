import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: "body{background:#333}main.svelte-eqzlu6{width:50vw;height:50vh;background-color:rgb(140, 107, 93);background:linear-gradient(#60281a80, #60281a80),\n			url('7d0ba46d-6c0d-4b16-ba76-4919585f890d.jpeg');color:#656a70;background-size:cover;background-position:center}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<main>\\n\\t<p>.</p>\\n</main>\\n\\n<style>\\n\\t:global(body) {\\n\\t\\tbackground: #333;\\n\\t}\\n\\tmain {\\n\\t\\twidth: 50vw;\\n\\t\\theight: 50vh;\\n\\t\\tbackground-color: rgb(140, 107, 93);\\n\\t\\tbackground: linear-gradient(#60281a80, #60281a80),\\n\\t\\t\\turl('7d0ba46d-6c0d-4b16-ba76-4919585f890d.jpeg');\\n\\t\\tcolor: #656a70;\\n\\t\\tbackground-size: cover;\\n\\t\\tbackground-position: center;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAKS,IAAM,CACb,UAAU,CAAE,IACb,CACA,kBAAK,CACJ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CACnC,UAAU,CAAE,gBAAgB,SAAS,CAAC,CAAC,SAAS,CAAC,CAAC;AACpD,GAAG,gDAAgD,CACjD,KAAK,CAAE,OAAO,CACd,eAAe,CAAE,KAAK,CACtB,mBAAmB,CAAE,MACtB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-eqzlu6" data-svelte-h="svelte-1oq7r8e"><p>.</p> </main>`;
});
export {
  Page as default
};
