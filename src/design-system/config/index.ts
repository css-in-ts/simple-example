import { FontFaceConfiguration } from "polished/lib/types/fontFaceConfiguration";

import {
  ColorProperties,
  ColorValueFixed,
  ColorValueScalable,
  FontFamily,
  FontFamilyType,
  FontStyle,
  FontWeightName,
  FontWeightValue,
  SizeHeadings,
  SizeModularScaleRatio,
  SizeScales,
  SizeUnits,
  SpaceScale
} from "../types/composite";
import { Size } from "../types/primitive";

export interface ColorConfig {
  fixed: ColorValueFixed;
  scalable: ColorValueScalable;
}

export type ResponsiveDeviceTypes =
  | "phone"
  | "phoneMd"
  | "phoneLg"
  | "tabletPortrait"
  | "tabletLandscape"
  | "laptop"
  | "desktop"
  | "4K";
export type ResponsiveBreakpoints = { [key in ResponsiveDeviceTypes]: number };

export interface SizeConfig {
  documentFontSize: string;
  modularScaleRatio: SizeModularScaleRatio;
  baseFontSize: string;
  sizeUnits: SizeUnits;
  lineHeight: number;
  baselineGrid: number;
  responsiveFontScaler?: number;
  responsiveFontSizes?: { [key in ResponsiveDeviceTypes]: string } | undefined;
  fontSizeScaleMap: SizeScales;
  // space
  spaceScale: SpaceScale;
}

export interface FontFamilyDefinitionOptions {
  family: FontFamily;
  variants: Partial<
    {
      [type in Exclude<FontStyle, "bold">]: FontWeightValue[];
    }
  >;
}

export interface FontFamilyDefinition {
  source: FontFamilyType;
  options: FontFamilyDefinitionOptions | FontFaceConfiguration;
}

export interface FontConfig {
  defaults: {
    fontFamily: FontFamily;
    fontStyle: FontStyle;
    fontWeight: FontWeightName;
    fontColor: ColorProperties | undefined;
  };
  headingSizeMap: {
    [key in SizeHeadings]: Size;
  };
  fontWeightMap: {
    [key in FontWeightName]: FontWeightValue;
  };
  fontFamilyDefinitions: FontFamilyDefinition[];
}

export type Config = {
  color: ColorConfig;
  size: SizeConfig;
  font: FontConfig;
  breakpoints: ResponsiveBreakpoints;
};

const config: Config = {
  color: {
    fixed: {
      light: "#fff",
      dark: "#000",
      "bright-green": "#F9FFFF"
    },
    scalable: {
      primary: "#bf9f5a",
      secondary: "#4e8588",
      accent: "#9ac371",
      gray: "#4a4a4a",
      light: "#eaecec",
      success: "#29a784",
      warning: "#f8e71c",
      error: "#d0021b"
    }
  },
  size: {
    documentFontSize: "16px",
    modularScaleRatio: "perfectFourth",
    baseFontSize: "14px",
    sizeUnits: "rem",
    lineHeight: 1.5,
    baselineGrid: 4,
    spaceScale: "linear",
    fontSizeScaleMap: {
      xxs: -2,
      xs: -1,
      sm: 0,
      md: 1,
      lg: 2,
      xl: 3,
      xxl: 4
    }
  },
  breakpoints: {
    phone: 320,
    phoneMd: 375,
    phoneLg: 425,
    tabletPortrait: 768,
    tabletLandscape: 1024,
    laptop: 1024,
    desktop: 1440,
    "4K": 2560
  },
  font: {
    defaults: {
      fontFamily: "Muli",
      fontStyle: "normal",
      fontWeight: "regular",
      fontColor: undefined
    },
    headingSizeMap: {
      h1: "xxl",
      h2: "xl",
      h3: "lg",
      h4: "md",
      h5: "sm"
    },
    fontWeightMap: {
      thin: "100",
      "extra-light": "200",
      light: "300",
      regular: "400",
      medium: "500",
      "semi-bold": "600",
      bold: "700",
      "extra-bold": "800",
      black: "900"
    },
    fontFamilyDefinitions: [
      {
        source: "google",
        options: {
          family: "Covered By Your Grace",
          variants: {
            normal: ["400"]
          }
        }
      },
      {
        source: "google",
        options: {
          family: "Montserrat",
          variants: {
            italic: ["400", "500"],
            normal: [
              "100",
              "200",
              "300",
              "400",
              "500",
              "600",
              "700",
              "800",
              "900"
            ]
          }
        }
      },
      {
        source: "google",
        options: {
          family: "Playfair Display",
          variants: {
            italic: ["400", "500"],
            normal: [
              "100",
              "200",
              "300",
              "400",
              "500",
              "600",
              "700",
              "800",
              "900"
            ]
          }
        }
      },
      {
        source: "google",
        options: {
          family: "Raleway",
          variants: {
            italic: ["300", "400"],
            normal: [
              "100",
              "200",
              "300",
              "400",
              "500",
              "600",
              "700",
              "800",
              "900"
            ]
          }
        }
      },
      {
        source: "google",
        options: {
          family: "Muli",
          variants: {
            italic: ["300", "400"],
            normal: [
              "100",
              "200",
              "300",
              "400",
              "500",
              "600",
              "700",
              "800",
              "900"
            ]
          }
        }
      }
    ]
  }
};

export default config;
