<script lang="ts">
  import { getColorCombo } from './functions/getColorCombo';
  import { getMagicNumber } from './functions/getMagicNumber';
  import type { ColorCombo } from './models/ColorCombo';
  import type { ManaColor } from './models/ManaColor';

  export let selectedColors: ManaColor[];
  let colorCombo: ColorCombo | undefined;

  $: magicNumber = getMagicNumber(selectedColors);
  $: colorCombo = getColorCombo(magicNumber);
</script>

{#if colorCombo}
  <p>ColorCombo: {colorCombo.name}</p>
    {#if colorCombo.motif}
      <p>由来：{colorCombo.motif}</p>
    {/if}
{/if}
