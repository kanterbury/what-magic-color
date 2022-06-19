<script lang="ts">
  import ManaIcon from './component/ManaIcon.svelte';
  import type { ManaColor } from './models/ManaColor';
  const colors: { label: string; id: ManaColor; icon: string, bgColor: string }[] = [
    { label: '白', id: 'white', icon: 'bi:sun-fill', bgColor:"#FFFCCE" },
    { label: '青', id: 'blue', icon: 'entypo:drop', bgColor: "#9ADEF1" },
    { label: '黒', id: 'black', icon: 'ion:skull-sharp', bgColor: "#C7BEB7" },
    { label: '赤', id: 'red', icon: 'fontisto:fire', bgColor: "#FCA083" },
    { label: '緑', id: 'green', icon: 'bi:tree-fill', bgColor: "#80CDA1" },
  ];
  export let selected: ManaColor[] = [];
</script>

<div class="container">
  {#each colors as color}
    <label>
      <ManaIcon
        icon={color.icon}
        isSelected={selected.includes(color.id)}
        --bgColor={color.bgColor}
      />
      {color.label}
      <input type="checkbox" bind:group={selected} value={color.id} />
    </label>
  {/each}
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
  }
  label:nth-of-type(n + 2) {
    margin-left: 16px;
  }
</style>
