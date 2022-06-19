<script lang="ts">
  import Icon from '@iconify/svelte';
  export let isSelected: boolean;
  export let icon: string;
</script>

<div class="icon-container" class:selected={isSelected}>
  <Icon {icon} height={64} width={64} />
</div>

<style>
  .icon-container {
    color: #aaa;
    border-radius: 50%;
    padding: 8px;
    background-color: transparent;
    transition: color 0.2s, backgroung-color 0.2s;
  }
  .selected {
    color: #000000;
    background-color: var(--bgColor);
  }
</style>
