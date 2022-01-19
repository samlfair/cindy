import { mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-static'

const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: adapter(),
  },
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: mdsvex({
    extensions: ['.svx', '.md'],
    layout: {
      _: './src/lib/components/frontmatter.svelte',
    },
  }),
}

export default config
