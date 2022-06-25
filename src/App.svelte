<script lang="ts">
  import Icon from '@iconify/svelte';
  import CheckBoxes from './CheckBoxes.svelte';
  import type { ManaColor } from './models/ManaColor';
  import Result from './Result.svelte';
  let selectedColors: ManaColor[] = [];
</script>

<main>
  <Icon icon="arcticons:magic" height={128} width={128} color="#ff3e00" />
  <h1>What magic color?</h1>

  <CheckBoxes bind:selected={selectedColors} />
  <div id="result-container">
    <Result {selectedColors} />
  </div>
  
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    font-size: 4rem;
    font-weight: 100;
    max-width: 14rem;
    margin: 0 0 16px;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }
  #result-container {
    margin-top: 16px;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
