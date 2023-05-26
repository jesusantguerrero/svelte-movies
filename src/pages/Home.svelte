<script>
    import svelteLogo from '../assets/svelte.svg'
    import viteLogo from '/vite.svg'
    import Counter from '../lib/Counter.svelte'
</script>

<section>
    <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} class="logo" alt="Vite Logo" />
        </a>
        <a href="https://svelte.dev" target="_blank" rel="noreferrer">
          <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
        </a>
      </div>
      <h1>Vite + Svelte</h1>
    
      <div class="card">
        <Counter />
      </div>
</section>