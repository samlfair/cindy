 <script>
  import { useFrontmatter } from '$lib/stores';
  
  export let title;
  export let description;
  export let favicon;

  useFrontmatter.set({title, description, favicon});
</script>


<article>
  <slot></slot>
</article>