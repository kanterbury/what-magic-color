import type { ColorCombo } from "src/models/ColorCombo";

export function getColorCombo(magicNumber: number): ColorCombo | undefined {
  if(magicNumber === 11111){
    return {
      name: "5C (Five Colors)",
      motif: "5色すべてのマナをデッキに含んでいることに由来します。",
      nameTextColor: "linear-gradient(90deg, #ffd700, #4682b4, #800080, #b22222, #006400)"
    }
  }
  if( [1111, 10111, 11011, 11101, 11110].includes(magicNumber)) {
    return {
      name: "4C (Four Colors)",
      motif: "4色のマナをデッキに含んでいることに由来します。",
      nameTextColor: "linear-gradient(90deg, #ffd700, #4682b4, #b22222, #006400)"
    }
  }
  switch (magicNumber) {
    case 10000: {
      return {
        name: "白単",
        nameTextColor: "#ffd700"
      };
    }
    case 11000: {
      return {
        name: "アゾリウスカラー",
        motif: "ラヴニカにおける10のギルドの一つであるアゾリウス評議会がモチーフ",
        nameTextColor: "linear-gradient(90deg, #ffd700, #4682b4)"
      };
    }
    case 10100: {
      return {
        name: "オルゾフカラー",
        motif: "ラヴニカにおける10のギルドの一つであるオルゾフ組がモチーフ",
        nameTextColor: "linear-gradient(90deg, #ffd700, #800080)"
      };
    }
    case 10010: {
      return {
        name: "ボロスカラー",
        motif: "ラヴニカにおける10のギルドの一つであるボロス軍がモチーフ",
        nameTextColor: "linear-gradient(90deg, #ffd700, #b22222)"
      };
    }
    case 10001: {
      return {
        name: "セレズニアカラー",
        motif: "ラヴニカにおける10のギルドの一つであるセレズニア議事会がモチーフ",
        nameTextColor: "linear-gradient(90deg, #ffd700, #006400)"
      };
    }
    case 11100: {
      return {
        name: "エスパーカラー",
        motif: "アラーラの断片ブロックにおいて、5つに分断された次元の一つであるエスパーがモチーフ",
        nameTextColor: "linear-gradient(90deg, #ffd700, #4682b4, #800080)"
      };
    }
    case 11010: {
      return {
        name: "ジェスカイカラー",
        motif: "タルキールの5つの氏族の一つであるジェスカイ道がモチーフ",
        nameTextColor: "linear-gradient(90deg, #ffd700, #4682b4, #b22222)"
      };
    }
    case 11001: {
      return {
        name: "バントカラー",
        motif: "『アラーラの断片』ブロックにおいて、5つに分断された次元の一つであるバントがモチーフ",
        nameTextColor: "linear-gradient(90deg, #ffd700, #4682b4, #006400)"
      };
    }
    case 10110: {
      return {
        name: "マルドゥカラー",
        motif: "タルキールの5つの氏族の一つであるマルドゥ族がモチーフ",
        nameTextColor: "linear-gradient(90deg, #ffd700, #800080, #b22222)"
      };
    }
    case 10101: {
      return {
        name: "アブザンカラー",
        motif: "タルキールの5つの氏族の一つであるアブザン家がモチーフ",
        nameTextColor: "linear-gradient(90deg, #ffd700, #800080, #006400)"
      };
    }
    case 10011: {
      return {
        name: "ナヤカラー",
        motif: "『アラーラの断片』ブロックにおいて、5つに分断された次元の一つであるナヤがモチーフ",
        nameTextColor: "linear-gradient(90deg, #ffd700, #b22222, #006400)"
      };
    }
    case 1000: {
      return {
        name: "青単",
        nameTextColor: "#4682b4"
      };
    }
    case 1100: {
      return {
        name: "ディミーアカラー",
        motif: "ラヴニカにおける10のギルドの一つであるディミーア家がモチーフ",
        nameTextColor: "linear-gradient(90deg, #4682b4, #800080)"
      };
    }
    case 1010: {
      return {
        name: "イゼットカラー",
        motif: "ラヴニカにおける10のギルドの一つであるイゼット団がモチーフ",
        nameTextColor: "linear-gradient(90deg, #4682b4, #b22222)"
      };
    }
    case 1001: {
      return {
        name: "シミックカラー",
        motif: "ラヴニカにおける10のギルドの一つであるシミック連合がモチーフ",
        nameTextColor: "linear-gradient(90deg, #4682b4, #006400)"
      };
    }
    case 1110: {
      return {
        name: "グリクシスカラー",
        motif: "『アラーラの断片』ブロックにおいて、5つに分断された次元の一つであるグリクシスがモチーフ",
        nameTextColor: "linear-gradient(90deg, #4682b4, #800080, #b22222)"
      };
    }
    case 1101: {
      return {
        name: "スゥルタイカラー",
        motif: "タルキールの5つの氏族の一つであるスゥルタイ群がモチーフ",
        nameTextColor: "linear-gradient(90deg, #4682b4, #800080, #006400)"
      };
    }
    case 1011: {
      return {
        name: "ティムールカラー",
        motif: "タルキールの5つの氏族の一つであるティムール境がモチーフ",
        nameTextColor: "linear-gradient(90deg, #4682b4, #b22222, #006400)"
      };
    }
    case 100: {
      return {
        name: "黒単",
        nameTextColor: "#800080"
      };
    }
    case 110: {
      return {
        name: "ラクドスカラー",
        motif: "ラヴニカにおける10のギルドの一つであるラグドス教団がモチーフ",
        nameTextColor: "linear-gradient(90deg, #800080, #b22222)"
      };
    }
    case 101: {
      return {
        name: "ゴルガリカラー",
        motif: "ラヴニカにおける10のギルドの一つであるゴルガリ団がモチーフ",
        nameTextColor: "linear-gradient(90deg, #800080, #006400)"
      };
    }
    case 111: {
      return {
        name: "ジャンドカラー",
        motif: "『アラーラの断片』ブロックにおいて、5つに分断された次元の一つであるジャンドがモチーフ",
        nameTextColor: "linear-gradient(90deg, #800080, #b22222, #006400)"
      };
    }
    case 10: {
      return {
        name: "赤単",
        nameTextColor: "#b22222"
      };
    }
    case 11: {
      return {
        name: "グルールカラー",
        motif: "ラヴニカにおける10のギルドの一つであるグルール一族がモチーフ",
        nameTextColor: "linear-gradient(90deg, #b22222, #006400)"
      };
    }
    case 1: {
      return {
        name: "緑単",
        nameTextColor: "#006400"
      };
    }
    default: {
      return undefined;
    }
  }
}