export function getMagicColor(magicNumber: number): string {
  switch (magicNumber) {
    case 10000: {
      return '白単';
    }
    case 1000: {
      return '青単';
    }
    case 100: {
      return '黒単';
    }
    case 10: {
      return '赤単';
    }
    case 1: {
      return '緑単';
    }
    default: {
      return 'other';
    }
  }
}