<script lang="ts">
  import Icon from '@iconify/svelte';
  import type { ManaColor } from './models/ManaColor';
  export let label: string;
  export let id: ManaColor;
  export let icon: string;
  export let selected: ManaColor[];
</script>

<label>
  <div class="icon-container" class:selected={selected.includes(id)}>
    <Icon {icon} height={64} width={64} />
  </div>
  {label}
  <input class="" type="checkbox" bind:group={selected} value={id} />
</label>

<style>
  :nth-of-type(n + 2) {
    margin-left: 16px;
  }
  .icon-container {
    color: #aaa;
    transition: color 0.2s;
  }
  .selected {
    color: var(--color);
  }
</style>
