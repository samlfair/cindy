<script>
  export let image;
  export let alt;
  export let reverse;
  export let small;
  export let square;
</script>

<div class="element" class:reverse class:small class:square>
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

  .element.reverse {
    flex-direction: row;
  }
  
  .element.small {
    font-size: 1.2rem;
  }

  .element.square {
    gap: 5%;
  }

  img {
    max-width: calc(30% + 45px);
    border-radius: 50%;
    aspect-ratio: 1;
    float: right;
    align-self: flex-start;
    opacity: 1;
    /* margin-right: 5vw; */
  }

  .square img {
    border-radius: 4px;
  }

  .caption {
    border-bottom: 1px solid var(--text-light);
    border-top: 1px solid var(--text-light);
    padding: 0.1rem .7rem 0.1rem 0;
    border-radius: 1px;
  }

  @media screen and (max-width: 400px) {
    .element, .element.reverse {
      flex-direction: column;
      justify-content: center;
    }
    img {
      align-self: unset;
      margin: 3rem 0;
    }
  }


</style>