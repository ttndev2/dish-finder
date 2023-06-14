import { ReactComponent as SvgSearch } from "./search.svg";
import { ReactComponent as SvgTwitter } from "./twitter.svg";
import { ReactComponent as SvgTelegram } from "./telegram.svg";
import { ReactComponent as SvgMedium } from "./medium.svg";
import { ReactComponent as SvgLanguage } from "./language.svg";
import { ReactComponent as SvgDifficultyHard } from "./difficultyHard.svg";
import { ReactComponent as SvgDifficultyMedium } from "./difficultyMedium.svg";
import { ReactComponent as SvgDifficultyEasy } from "./difficultyEasy.svg";

import FlagIndia from "./india.png";
import FlagSpain from "./spain.png";
import FlagThailand from "./thailand.png";
import FlagVietnam from "./vietnam.png";

import Dish from "./dish.png";

const Image = {
  SVG: {
    Search: SvgSearch,
    Twitter: SvgTwitter,
    Telegram: SvgTelegram,
    Medium: SvgMedium,
    Language: SvgLanguage,
    Difficulty: {
      Easy: SvgDifficultyEasy,
      Medium: SvgDifficultyMedium,
      Hard: SvgDifficultyHard,
    },
  },
  flag: {
    india: FlagIndia,
    spanish: FlagSpain,
    thailand: FlagThailand,
    vietnam: FlagVietnam,
  },
  other: {
    dish: Dish,
  },
};

export default Image;
