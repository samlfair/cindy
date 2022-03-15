<script>
  export let image;
  export let alt;
</script>

<div class="element">
  <img 
    src={image} 
    {alt}
  />
  <div class="caption">
    <slot></slot>
  </div>
</div>

<style>
  .element {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    font-size: 1.4rem;
  }

  img {
    max-width: calc(30% + 45px);
    border-radius: max(calc(40vw - 200px), 45px);
    float: right;
    align-self: flex-start;
    /* margin-right: 5vw; */
  }

  .caption {
    border-bottom: 1px solid var(--text-light);
    border-top: 1px solid var(--text-light);
    padding: 0.1rem .7rem 0.1rem 0;
    border-radius: 1px;
  }


</style>