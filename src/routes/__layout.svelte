<script>
  import { Seo, Nav } from '$lib/components'
</script>

<Nav />
<main class="bound">
  <slot></slot>
</main>
<hr/>
<div class="copywrite">&#169; Cindy Littlefair, {(new Date).getFullYear()}</div>
<hr/>

<style global>
  body {
    display: block;
  }

  p {
    font-family: Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  }

  .bound {
    display: grid;
    grid-template-columns: 1fr min(45rem,90%) 1fr;
  }

  .bound > * {
    grid-column: 2;
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
    padding: 1rem;
    background: transparent;
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