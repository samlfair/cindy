 <script>
  import { Seo } from "./"

  export let title
  export let subtitle
  export let description
  export let favicon
</script>

<Seo {title} {subtitle} {description} {favicon} />

<h1>{title || "Cindy Littlefair"}</h1>

<article>
  <slot></slot>
</article>