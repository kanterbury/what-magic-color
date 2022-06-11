<script lang="ts">
  import { getMagicColor } from './functions/getColorCombo';
  import { getMagicNumber } from './functions/getMagicNumber';
import type { ColorCombo } from './models/ColorCombo';
  import type { ManaColor } from './models/ManaColor';

  export let selectedColors: ManaColor[];
  let magicColor: ColorCombo;

  $: magicNumber = getMagicNumber(selectedColors);
  $: magicColor = getMagicColor(magicNumber);
</script>

<p>MagicColor: {magicColor.name}</p>
