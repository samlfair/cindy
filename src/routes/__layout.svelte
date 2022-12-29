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
  <h1>{frontmatter.title || "Cindy Littlefair"}</h1>
  {#if frontmatter.subtitle}<h2>{frontmatter.subtitle}</h2>{/if}
</nav>
  <slot></slot>
  <hr/>
  <div class="copywrite">&#169; Cindy Littlefair, {(new Date).getFullYear()}</div>
  <hr/>
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

  .copywrite {
    text-align: center;
  }

  hr {
    border: none;
  }

  hr + p:first-letter {
    float: left;
    font-size: 4.5em;
    line-height: 60px;
    padding-top: 4px;
    padding-right: 8px;
    padding-left: 3px;
  }

  blockquote em, em em {
    font-style: normal;
  }
</style>