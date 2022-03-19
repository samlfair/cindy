---
title: Cindy Littlefair, Writer
subtitle: null
description: Thanks for subscribing.
favicon: 📰
---

<script>
  import {onDestroy} from 'svelte'
  import {goto} from '$app/navigation'

  export let status = null

  let remaining = 10

  const interval = setInterval(() => {
    remaining--
    if(!remaining) {
      goto('/')
    }
  }, 1000)

  onDestroy(() => clearInterval(interval))
</script>

{#if status === 200}

## Thanks for subscribing

We'll send you back to the homepage in {remaining} seconds, or you can head there yourself:

[Return home](/)

{:else}

Oops, it looks like something went wrong with your subscription. Please email sam@littlefair.ca for tech support.

{/if}
