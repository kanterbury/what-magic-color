import type { ColorCombo } from "src/models/ColorCombo";

export function getMagicColor(magicNumber: number): ColorCombo {
  switch (magicNumber) {
    case 10000: {
      return {
        name: "白単",
        description: "",
        colorSetting: "",
      };
    }
    case 1000: {
      return {
        name: "青単",
        description: "",
        colorSetting: "",
      };
    }
    case 100: {
      return {
        name: "黒単",
        description: "",
        colorSetting: "",
      };
    }
    case 10: {
      return {
        name: "赤単",
        description: "",
        colorSetting: "",
      };
    }
    case 1: {
      return {
        name: "緑単",
        description: "",
        colorSetting: "",
      };
    }
    default: {
      return {
        name: "other",
        description: "",
        colorSetting: "",
      };
    }
  }
}