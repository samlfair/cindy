 <script>
  import { useFrontmatter } from '$lib/stores'
  
  export let title
  export let subtitle
  export let description
  export let favicon

  useFrontmatter.set({title, description, subtitle, favicon})
</script>


<article>
  <slot></slot>
</article>