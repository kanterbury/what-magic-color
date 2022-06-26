<script lang="ts">
  import { getColorCombo } from '../functions/getColorCombo';
  import { getMagicNumber } from '../functions/getMagicNumber';
  import type { ColorCombo } from '../models/ColorCombo';
  import type { ManaColor } from '../models/ManaColor';

  export let selectedColors: ManaColor[];
  let colorCombo: ColorCombo | undefined;

  $: magicNumber = getMagicNumber(selectedColors);
  $: colorCombo = getColorCombo(magicNumber);
</script>

<div>
  {#if colorCombo}
  <span class="name" style="--text-color:{colorCombo.nameTextColor}">{colorCombo.name}</span>
    {#if colorCombo.motif}
      <p class="motif">{colorCombo.motif}</p>
    {/if}
  {/if}
</div>


<style>
  div {
    min-height: 300px;
  }
  .name{
    font-size: 36px;
    font-weight: bold;
    color: #FF8C00;
    background: var(--text-color);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .motif {
    font-size: 18px;
  }
</style>
