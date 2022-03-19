// import adapter from '@sveltejs/adapter-auto'
import adapterStatic from '@sveltejs/adapter-static'
// import adapterVercel from '@sveltejs/adapter-vercel'
import { mdsvex } from 'mdsvex'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapterStatic(),
  },
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: [
    mdsvex({
      extensions: ['.svx', '.md'],
      layout: './src/lib/components/frontmatter.svelte',
    }),
    preprocess(),
  ],
}

export default config
