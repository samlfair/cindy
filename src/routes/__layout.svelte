<script>
  import { useFrontmatter } from '$lib/stores';
  import { Seo } from '$lib/components'

  let frontmatter;

  // Frontmatter store is set is frontmatter component, which is an mdsvex layout
  useFrontmatter.subscribe(value => {
    frontmatter = value;
  });
</script>

<Seo title={frontmatter.title} subtitle={frontmatter.subtitle} description={frontmatter.description} favicon={frontmatter.favicon} />

<nav>
  <h1>{frontmatter.title}</h1>
  <h2>{frontmatter.subtitle}</h2>
</nav>
<main>
  <slot></slot>
</main>

<style global>
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  main img {
    max-width: 35%;
    border-radius: 50%;
    float: left;
    margin-right: 5vw;
  }

</style>