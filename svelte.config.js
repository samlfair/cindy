import { mdsvex } from 'mdsvex'
// import static from '@sveltejs/adapter-static'
import vercel from '@sveltejs/adapter-vercel'

const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: vercel(),
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
