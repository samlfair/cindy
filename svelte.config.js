import auto from '@sveltejs/adapter-auto'
// import adapterStatic from '@sveltejs/adapter-static'
// import vercel from '@sveltejs/adapter-vercel'

// import adapterVercel from '@sveltejs/adapter-vercel'
import { mdsvex } from 'mdsvex'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: auto(),
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
