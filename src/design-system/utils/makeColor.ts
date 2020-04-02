import { mix } from "polished";

import config from "../config";
import {
  ColorBlendRatios,
  ColorHex,
  ColorProperties,
  ColorScales
} from "../types/composite";
import { ColorFixed, ColorScalable } from "../types/primitive";

type ColorMapScalable = { [key in ColorScalable]: ColorScales };
type ColorMapFixed = { [key in ColorFixed]: ColorHex };

const createColor = (
  scaler: ColorBlendRatios,
  color: ColorScalable
): ColorHex =>
  mix(scaler, config.color.fixed.light, config.color.scalable[color]);

const createColorScale = (hex: ColorScalable): ColorScales => [
  config.color.scalable[hex],
  createColor(0.25, hex),
  createColor(0.5, hex),
  createColor(0.75, hex)
];

const scalableColorMap: ColorMapScalable = {
  primary: createColorScale("primary"),
  secondary: createColorScale("secondary"),
  accent: createColorScale("accent"),
  gray: createColorScale("gray"),
  light: createColorScale("light"),
  success: createColorScale("success"),
  warning: createColorScale("warning"),
  error: createColorScale("error")
};

const fixedColorMap: ColorMapFixed = {
  light: config.color.fixed.light,
  dark: config.color.fixed.dark,
  "bright-green": config.color.fixed["bright-green"]
};

export const makeColor = ({
  fixed,
  scalable,
  custom
}: ColorProperties): ColorHex => {
  if (scalable?.color) {
    return scalableColorMap[scalable.color][scalable.scale || 0];
  }
  if (fixed) {
    return fixedColorMap[fixed];
  }
  if (custom) {
    return custom;
  }
  return "";
};
