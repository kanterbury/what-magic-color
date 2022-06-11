<script lang="ts">
  import type { ManaColor } from './models/ManaColor';

  export let selectedColors: ManaColor[];
  let magicColor: string;

  function getMagicNumber(selectedColors: ManaColor[]): number {
    let magicNumber = 0;
    if (selectedColors.includes('red')) {
      magicNumber += 10000;
    }
    if (selectedColors.includes('black')) {
      magicNumber += 1000;
    }
    if (selectedColors.includes('blue')) {
      magicNumber += 100;
    }
    if (selectedColors.includes('white')) {
      magicNumber += 10;
    }
    if (selectedColors.includes('green')) {
      magicNumber += 1;
    }

    return magicNumber;
  }

  function getMagicColor(magicNumber: number): string {
    switch (magicNumber) {
      case 10000: {
        return '赤単';
      }
      case 1000: {
        return '黒単';
      }
      case 100: {
        return '青単';
      }
      case 10: {
        return '白単';
      }
      case 1: {
        return '緑単';
      }
      default: {
        return 'other';
      }
    }
  }

  $: magicNumber = getMagicNumber(selectedColors);
  $: magicColor = getMagicColor(magicNumber);
</script>

<p>MagicColor: {magicColor}</p>
