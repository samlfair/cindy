import adapter from '@sveltejs/adapter-auto'
import adapterStatic from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapterStatic(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
  },
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: [
    mdsvex({
      extensions: ['.svx', '.md'],
      layout: {
        frontmatter: './src/lib/components/frontmatter.svelte',
      },
    }),
  ],
}

export default config
