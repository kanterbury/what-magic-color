<script lang="ts">
  import type { ManaColor } from './models/ManaColor';
  const colors: { label: string; id: ManaColor }[] = [
    { label: '白', id: 'white' },
    { label: '青', id: 'blue' },
    { label: '黒', id: 'black' },
    { label: '赤', id: 'red' },
    { label: '緑', id: 'green' },
  ];
  export let selected = [];
</script>

{#each colors as color}
  <label>
    {color.label}
    <input type="checkbox" bind:group={selected} value={color.id} />
  </label>
{/each}
