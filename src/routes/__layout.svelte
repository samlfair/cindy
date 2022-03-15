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

<main data-theme="light">
<nav>
  <h1>{frontmatter.title}</h1>
  {#if frontmatter.subtitle}<h2>{frontmatter.subtitle}</h2>{/if}
</nav>
  <slot></slot>
</main>

<style global>
  p {
    font-family: Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

</style>