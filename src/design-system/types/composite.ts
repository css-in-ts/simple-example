import { ratioNames } from "polished/lib/helpers/modularScale";

import { ColorFixed, ColorScalable, Position, Size } from "./primitive";

/* ----------------------------- *\
|* ----------- Color ----------- *|
\* ----------------------------- */

export type ColorScalePosition = 0 | 1 | 2 | 3;

export type ColorHex = string;
export type ColorScales = [ColorHex, ColorHex, ColorHex, ColorHex];
export type ColorBlendRatios = 0 | 0.25 | 0.5 | 0.75;

export type ColorValueScalable = { [key in ColorScalable]: ColorHex };
export type ColorValueFixed = { [key in ColorFixed]: ColorHex };

export type ColorProperties = {
  fixed?: ColorFixed;
  scalable?: { color: ColorScalable; scale?: ColorScalePosition };
  custom?: ColorHex;
};

/* ---------------------------- *\
|* ----------- Font ----------- *|
\* ---------------------------- */
export type FontSize = Size & SizeHeadings;
export type FontFamilyType = "system" | "user-defined" | "google";
export type FontFamily =
  | "system"
  | "Montserrat"
  | "Raleway"
  | "Covered By Your Grace"
  | "Muli"
  | "Playfair Display";
export type FontStyle = "normal" | "italic";
export type FontWeightValue =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";
export type FontWeightName =
  | "thin"
  | "extra-light"
  | "light"
  | "regular"
  | "medium"
  | "semi-bold"
  | "bold"
  | "extra-bold"
  | "black";
export type FontOS = "OSX" | "windows" | "android" | "ubuntu";

export interface FontProperties {
  fontSize: (Size | SizeHeadings) | { custom: number };
  lineHeight?: Size | { custom: number };
  fontFamily?: FontFamily;
  fontWeight?: FontWeightName;
  fontStyle?: FontStyle;
  fontColor?: ColorProperties | undefined;
}

/* -------------------------------- *\
|* ----------- Position ----------- *|
\* -------------------------------- */
export interface PositionProperties {
  position: Position;
  custom?: string;
}

/* ---------------------------- *\
|* ----------- Size ----------- *|
\* ---------------------------- */

// Size
export type SizeUnits = "raw" | "em" | "rem" | "px";
export type SizeModularScaleRatio = keyof typeof ratioNames | number;
export type SizeScales = { [key in Size]: number };
export type SizeHeadings = "h1" | "h2" | "h3" | "h4" | "h5";

export type SizeProperties =
  | (Size | SizeHeadings)
  | {
      custom?: number;
    };

// Space
export type SpaceScale = "linear" | "exponential";
export type SpaceLinearValues = number[];

export type SpaceProperties =
  | (Size | number)
  | {
      custom?: number;
    }
  | "auto";

type CSSBoxLong = "top" | "right" | "bottom" | "left";
type CSSBoxShort = "vertical" | "horizontal";
type CSSBox = CSSBoxShort | CSSBoxLong;

export type InsetOutsetProperties = {
  [key in CSSBox]: SpaceProperties;
};
