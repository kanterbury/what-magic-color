import type { ColorCombo } from "src/models/ColorCombo";

export function getColorCombo(magicNumber: number): ColorCombo | undefined {
  if(magicNumber === 11111){
    return {
      name: "5C (Five Colors)",
      motif: "5色すべてのマナをデッキに含んでいることに由来します。",
      description: "",
      nameTextColor: "linear-gradient(90deg, #ffd700, #4682b4, #800080, #b22222, #006400)"
    }
  }
  if( [1111, 10111, 11011, 11101, 11110].includes(magicNumber)) {
    return {
      name: "4C (Four Colors)",
      motif: "4色のマナをデッキに含んでいることに由来します。",
      description: "",
      nameTextColor: "linear-gradient(90deg, #ffd700, #4682b4, #b22222, #006400)"
    }
  }
  switch (magicNumber) {
    case 10000: {
      return {
        name: "白単",
        description: "",
        nameTextColor: "#ffd700"
      };
    }
    case 11000: {
      return {
        name: "アゾリウスカラー",
        motif: "ラヴニカにおける10のギルドの一つであるアゾリウス評議会がモチーフ",
        description: "非常に防御的。対戦相手の行動を縛るようなカードが多く収録されている。",
        nameTextColor: "linear-gradient(90deg, #ffd700, #4682b4)"
      };
    }
    case 10100: {
      return {
        name: "オルゾフカラー",
        motif: "ラヴニカにおける10のギルドの一つであるオルゾフ組がモチーフ",
        description: "拝金主義による金品のやりとりをドレインによって表している。また、幽霊議会を有していることからスピリットや幽霊をイメージしたような能力が多い。",
        nameTextColor: "linear-gradient(90deg, #ffd700, #800080)"
      };
    }
    case 10010: {
      return {
        name: "ボロスカラー",
        motif: "ラヴニカにおける10のギルドの一つであるボロス軍がモチーフ",
        description: "情報収集・分析に頼らず、即座に行動する軍隊という設定から、軽くて優秀なクリーチャーや速攻を持つクリーチャーを多く有する",
        nameTextColor: "linear-gradient(90deg, #ffd700, #b22222)"
      };
    }
    case 10001: {
      return {
        name: "セレズニアカラー",
        motif: "ラヴニカにおける10のギルドの一つであるセレズニア議事会がモチーフ",
        description: "自然との調和、共同体主義を表す特徴として、トークンの生産能力に長ける",
        nameTextColor: "linear-gradient(90deg, #ffd700, #006400)"
      };
    }
    case 11100: {
      return {
        name: "エスパーカラー",
        motif: "アラーラの断片ブロックにおいて、5つに分断された次元の一つであるエスパーがモチーフ",
        description: "霊気を封じ込めた合金「エーテリウム」を表すアーティファクトをテーマとする",
        nameTextColor: "linear-gradient(90deg, #ffd700, #4682b4, #800080)"
      };
    }
    case 11010: {
      return {
        name: "ジェスカイカラー",
        motif: "タルキールの5つの氏族の一つであるジェスカイ道がモチーフ",
        description: "ジェスカイの狡知な側面を表す「果敢」というキーワード能力が特徴。また、クリーチャーでない呪文を唱えることで誘発する能力を持つカードが多数存在している。",
        nameTextColor: "linear-gradient(90deg, #ffd700, #4682b4, #b22222)"
      };
    }
    case 11001: {
      return {
        name: "バントカラー",
        motif: "『アラーラの断片』ブロックにおいて、5つに分断された次元の一つであるバントがモチーフ",
        description: "代表のクリーチャーを補佐するというイメージの下、クリーチャーを保護したり支援したりする呪文が多く存在する。",
        nameTextColor: "linear-gradient(90deg, #ffd700, #4682b4, #006400)"
      };
    }
    case 10110: {
      return {
        name: "マルドゥカラー",
        motif: "タルキールの5つの氏族の一つであるマルドゥ族がモチーフ",
        description: "マルドゥの迅速な側面を表す「強襲」や「疾駆」という能力が特徴。また、攻撃時の誘発型能力や攻撃強制・ブロック制限など、攻撃を推奨するカードが多数存在している。",
        nameTextColor: "linear-gradient(90deg, #ffd700, #800080, #b22222)"
      };
    }
    case 10101: {
      return {
        name: "アブザンカラー",
        motif: "タルキールの5つの氏族の一つであるアブザン家がモチーフ",
        description: "キーワード能力の「長久」は序盤を耐え忍ぶことで長期的に大きな効果を生み、アブザンの忍耐の側面を表している。",
        nameTextColor: "linear-gradient(90deg, #ffd700, #800080, #006400)"
      };
    }
    case 10011: {
      return {
        name: "ナヤカラー",
        motif: "『アラーラの断片』ブロックにおいて、5つに分断された次元の一つであるナヤがモチーフ",
        description: "一定以上のパワーを持つクリーチャーに恩恵を与えるカードが多数存在する。これはナヤを闊歩するガルガンチュアンという存在への崇拝を表している",
        nameTextColor: "linear-gradient(90deg, #ffd700, #b22222, #006400)"
      };
    }
    case 1000: {
      return {
        name: "青単",
        description: "",
        nameTextColor: "#4682b4"
      };
    }
    case 1100: {
      return {
        name: "ディミーアカラー",
        motif: "ラヴニカにおける10のギルドの一つであるディミーア家がモチーフ",
        description: "肉体的な攻撃ではなく「精神攻撃」をイメージしたライブラリー破壊に関するカードが多く収録されていた。",
        nameTextColor: "linear-gradient(90deg, #4682b4, #800080)"
      };
    }
    case 1010: {
      return {
        name: "イゼットカラー",
        motif: "ラヴニカにおける10のギルドの一つであるイゼット団がモチーフ",
        description: "ギルドにおける研究や知識をインスタントやソーサリーで表しており、パーマネントでもインスタントやソーサリーに反応するカードが多い。",
        nameTextColor: "linear-gradient(90deg, #4682b4, #b22222)"
      };
    }
    case 1001: {
      return {
        name: "シミックカラー",
        motif: "ラヴニカにおける10のギルドの一つであるシミック連合がモチーフ",
        description: "生命の改良や進化を+1/+1カウンターで表しており、単純にP/Tを上昇させるだけでなく、再生や飛行などの能力を付加したり、+1/+1カウンターを利用したギミックを持つカードも多い。",
        nameTextColor: "linear-gradient(90deg, #4682b4, #006400)"
      };
    }
    case 1110: {
      return {
        name: "グリクシスカラー",
        motif: "『アラーラの断片』ブロックにおいて、5つに分断された次元の一つであるグリクシスがモチーフ",
        description: "キーワード能力の「蘇生」は死してなお復活するアンデットの力や屍術を表している。",
        nameTextColor: "linear-gradient(90deg, #4682b4, #800080, #b22222)"
      };
    }
    case 1101: {
      return {
        name: "スゥルタイカラー",
        motif: "タルキールの5つの氏族の一つであるスゥルタイ群がモチーフ",
        description: "キーワード能力の「探査」は死者さえも道具とする、スゥルタイの残忍な側面を表している。墓地を肥やすカードが多く、またそれ以外にも、リアニメイトやゾンビ・トークンの生成など、屍術をイメージさせる能力を持つカードが複数存在している。",
        nameTextColor: "linear-gradient(90deg, #4682b4, #800080, #006400)"
      };
    }
    case 1011: {
      return {
        name: "ティムールカラー",
        motif: "タルキールの5つの氏族の一つであるティムール境がモチーフ",
        description: "固有能力の「獰猛」はサイズの大きなクリーチャーによって対戦相手を圧倒する、ティムールの獰猛な側面を表してい。",
        nameTextColor: "linear-gradient(90deg, #4682b4, #b22222, #006400)"
      };
    }
    case 100: {
      return {
        name: "黒単",
        description: "",
        nameTextColor: "#800080"
      };
    }
    case 110: {
      return {
        name: "ラクドスカラー",
        motif: "ラヴニカにおける10のギルドの一つであるラグドス教団がモチーフ",
        description: "快楽主義であり、衝動的な快楽を得ようとする特徴から、自分のリソースを犠牲にしてでも、対戦相手のリソースを削っていく攻撃的なカードが多い。",
        nameTextColor: "linear-gradient(90deg, #800080, #b22222)"
      };
    }
    case 101: {
      return {
        name: "ゴルガリカラー",
        motif: "ラヴニカにおける10のギルドの一つであるゴルガリ団がモチーフ",
        description: "死から新たな「生」を生みだすというギルドの特徴から、墓地利用を有するカードや生け贄に捧げるカードが非常に豊富。",
        nameTextColor: "linear-gradient(90deg, #800080, #006400)"
      };
    }
    case 111: {
      return {
        name: "ジャンドカラー",
        motif: "『アラーラの断片』ブロックにおいて、5つに分断された次元の一つであるジャンドがモチーフ",
        description: "",
        nameTextColor: "linear-gradient(90deg, #800080, #b22222, #006400)"
      };
    }
    case 10: {
      return {
        name: "赤単",
        description: "",
        nameTextColor: "#b22222"
      };
    }
    case 11: {
      return {
        name: "グルールカラー",
        motif: "ラヴニカにおける10のギルドの一つであるグルール一族がモチーフ",
        description: "非常に攻撃的なギルド。クリーチャーも暴力的で攻撃に特化したような能力を持ったものが多い。文明を忌み嫌うことから、アーティファクト破壊に長ける。",
        nameTextColor: "linear-gradient(90deg, #b22222, #006400)"
      };
    }
    case 1: {
      return {
        name: "緑単",
        description: "",
        nameTextColor: "#006400"
      };
    }
    default: {
      return undefined;
    }
  }
}