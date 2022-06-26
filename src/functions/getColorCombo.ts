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
        nameTextColor: "#ffd700",
        motif: "<b>白単色</b>で構成させることに由来します。"
      };
    }
    case 11000: {
      return {
        name: "アゾリウスカラー",
        motif: "ラヴニカにおける10のギルドの一つである<b>アゾリウス評議会</b>がモチーフ",
        nameTextColor: "linear-gradient(90deg, #ffd700, #4682b4)"
      };
    }
    case 10100: {
      return {
        name: "オルゾフカラー",
        motif: "ラヴニカにおける10のギルドの一つである<b>オルゾフ組</b>がモチーフ",
        nameTextColor: "linear-gradient(90deg, #ffd700, #800080)"
      };
    }
    case 10010: {
      return {
        name: "ボロスカラー",
        motif: "ラヴニカにおける10のギルドの一つである<b>ボロス軍</b>がモチーフ",
        nameTextColor: "linear-gradient(90deg, #ffd700, #b22222)"
      };
    }
    case 10001: {
      return {
        name: "セレズニアカラー",
        motif: "ラヴニカにおける10のギルドの一つである<b>セレズニア議事会</b>がモチーフ",
        nameTextColor: "linear-gradient(90deg, #ffd700, #006400)"
      };
    }
    case 11100: {
      return {
        name: "エスパーカラー",
        motif: "アラーラの断片ブロックにおいて、5つに分断された次元の一つである<b>エスパー</b>がモチーフ",
        nameTextColor: "linear-gradient(90deg, #ffd700, #4682b4, #800080)"
      };
    }
    case 11010: {
      return {
        name: "ジェスカイカラー",
        motif: "タルキールの5つの氏族の一つである<b>ジェスカイ道</b>がモチーフ",
        nameTextColor: "linear-gradient(90deg, #ffd700, #4682b4, #b22222)"
      };
    }
    case 11001: {
      return {
        name: "バントカラー",
        motif: "『アラーラの断片』ブロックにおいて、5つに分断された次元の一つである<b>バント</b>がモチーフ",
        nameTextColor: "linear-gradient(90deg, #ffd700, #4682b4, #006400)"
      };
    }
    case 10110: {
      return {
        name: "マルドゥカラー",
        motif: "タルキールの5つの氏族の一つである<b>マルドゥ族</b>がモチーフ",
        nameTextColor: "linear-gradient(90deg, #ffd700, #800080, #b22222)"
      };
    }
    case 10101: {
      return {
        name: "アブザンカラー",
        motif: "タルキールの5つの氏族の一つである<b>アブザン家</b>がモチーフ",
        nameTextColor: "linear-gradient(90deg, #ffd700, #800080, #006400)"
      };
    }
    case 10011: {
      return {
        name: "ナヤカラー",
        motif: "『アラーラの断片』ブロックにおいて、5つに分断された次元の一つである<b>ナヤ</b>がモチーフ",
        nameTextColor: "linear-gradient(90deg, #ffd700, #b22222, #006400)"
      };
    }
    case 1000: {
      return {
        name: "青単",
        nameTextColor: "#4682b4",
        motif: "<b>青単色</b>で構成させることに由来します。"
      };
    }
    case 1100: {
      return {
        name: "ディミーアカラー",
        motif: "ラヴニカにおける10のギルドの一つである<b>ディミーア家</b>がモチーフ",
        nameTextColor: "linear-gradient(90deg, #4682b4, #800080)"
      };
    }
    case 1010: {
      return {
        name: "イゼットカラー",
        motif: "ラヴニカにおける10のギルドの一つである<b>イゼット団</b>がモチーフ",
        nameTextColor: "linear-gradient(90deg, #4682b4, #b22222)"
      };
    }
    case 1001: {
      return {
        name: "シミックカラー",
        motif: "ラヴニカにおける10のギルドの一つである<b>シミック連合</b>がモチーフ",
        nameTextColor: "linear-gradient(90deg, #4682b4, #006400)"
      };
    }
    case 1110: {
      return {
        name: "グリクシスカラー",
        motif: "『アラーラの断片』ブロックにおいて、5つに分断された次元の一つである<b>グリクシス</b>がモチーフ",
        nameTextColor: "linear-gradient(90deg, #4682b4, #800080, #b22222)"
      };
    }
    case 1101: {
      return {
        name: "スゥルタイカラー",
        motif: "タルキールの5つの氏族の一つである<b>スゥルタイ群</b>がモチーフ",
        nameTextColor: "linear-gradient(90deg, #4682b4, #800080, #006400)"
      };
    }
    case 1011: {
      return {
        name: "ティムールカラー",
        motif: "タルキールの5つの氏族の一つである<b>ティムール境</b>がモチーフ",
        nameTextColor: "linear-gradient(90deg, #4682b4, #b22222, #006400)"
      };
    }
    case 100: {
      return {
        name: "黒単",
        nameTextColor: "#800080",
        motif: "<b>黒単色</b>で構成させることに由来します。"
      };
    }
    case 110: {
      return {
        name: "ラクドスカラー",
        motif: "ラヴニカにおける10のギルドの一つである<b>ラグドス教団</b>がモチーフ",
        nameTextColor: "linear-gradient(90deg, #800080, #b22222)"
      };
    }
    case 101: {
      return {
        name: "ゴルガリカラー",
        motif: "ラヴニカにおける10のギルドの一つである<b>ゴルガリ団</b>がモチーフ",
        nameTextColor: "linear-gradient(90deg, #800080, #006400)"
      };
    }
    case 111: {
      return {
        name: "ジャンドカラー",
        motif: "『アラーラの断片』ブロックにおいて、5つに分断された次元の一つである<b>ジャンド</b>がモチーフ",
        nameTextColor: "linear-gradient(90deg, #800080, #b22222, #006400)"
      };
    }
    case 10: {
      return {
        name: "赤単",
        nameTextColor: "#b22222",
        motif: "<b>赤単色</b>で構成させることに由来します。"
      };
    }
    case 11: {
      return {
        name: "グルールカラー",
        motif: "ラヴニカにおける10のギルドの一つである<b>グルール一族</b>がモチーフ",
        nameTextColor: "linear-gradient(90deg, #b22222, #006400)"
      };
    }
    case 1: {
      return {
        name: "緑単",
        nameTextColor: "#006400",
        motif: "<b>緑単色</b>で構成させることに由来します。"
      };
    }
    default: {
      return undefined;
    }
  }
}