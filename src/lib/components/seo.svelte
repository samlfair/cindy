<script>
  export let title
  export let description
  export let favicon
  export let subtitle
</script>

<svelte:head>
  <title>{title} - {subtitle}</title>
  <meta property="og:title" content={`${title} - ${subtitle}`} />
  <meta property="og:description" content={description} />
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2284%22>{favicon}</text></svg>"/>
</svelte:head>
