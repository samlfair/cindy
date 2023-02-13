<nav class="bound">
  <div class="flex-row">
    <a target="_blank" class="substack" href="https://cindylittlefair.substack.com/">Substack ↗︎</a>
    <form
    action="./newsletter"
    method="post"
    >
      <input 
      type="text"
      name="email"
      pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
      placeholder="you@example.com"
      />
      <button type="submit">Subscribe</button>
    </form>
  </div>
</nav>




<style>
  nav {
    background: var(--accent-bg);
    position: sticky;
    top: 0;
    z-index: 1;
  }

  .flex-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
  }

  .substack {
    text-decoration: none;
    font-size: 1.1em;
    white-space: pre;
  }

  form {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: baseline;
    gap: 1rem;
  }

  input[type="text"] {
    flex-shrink: 1;
    min-width: 0px;
    /* max-width: 20vw; */
    /* min-width: 200px; */
  }
</style>