<script lang="ts">
  import Icon from '@iconify/svelte';
  import CheckBox from './CheckBox.svelte';
  import type { ManaColor } from './models/ManaColor';
  const colors: { label: string; id: ManaColor; icon: string }[] = [
    { label: '白', id: 'white', icon: 'bi:sun-fill' },
    { label: '青', id: 'blue', icon: 'entypo:drop' },
    { label: '黒', id: 'black', icon: 'ion:skull-sharp' },
    { label: '赤', id: 'red', icon: 'fontisto:fire' },
    { label: '緑', id: 'green', icon: 'bi:tree-fill' },
  ];
  export let selected: ManaColor[];
</script>

<div class="container">
  {#each colors as color}
    <CheckBox
      label={color.label}
      id={color.id}
      icon={color.icon}
      --color={'#000'}
      bind:selected
    />
  {/each}
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
  }
</style>
