import type { ManaColor } from "src/models/ManaColor";

export function getMagicNumber(selectedColors: ManaColor[]): number {
  let magicNumber = 0;
  if (selectedColors.includes('white')) {
    magicNumber += 10000;
  }
  if (selectedColors.includes('blue')) {
    magicNumber += 1000;
  }
  if (selectedColors.includes('black')) {
    magicNumber += 100;
  }
  if (selectedColors.includes('red')) {
    magicNumber += 10;
  }
  if (selectedColors.includes('green')) {
    magicNumber += 1;
  }

  return magicNumber;
}