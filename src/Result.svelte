<script lang="ts">
  import { getMagicColor } from './functions/getColorCombo';
  import { getMagicNumber } from './functions/getMagicNumber';
  import type { ManaColor } from './models/ManaColor';

  export let selectedColors: ManaColor[];
  let magicColor: string;

  $: magicNumber = getMagicNumber(selectedColors);
  $: magicColor = getMagicColor(magicNumber);
</script>

<p>MagicColor: {magicColor}</p>
