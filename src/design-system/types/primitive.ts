// Color
type ColorStateful = "success" | "warning" | "error";
type ColorApplication = "primary" | "secondary" | "accent" | "gray" | "light";
export type ColorFixed = "dark" | "light" | "bright-green";
export type ColorScalable = ColorApplication | ColorStateful;
export type Color = ColorScalable | ColorFixed;

// Size
export type Size = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

// Layout
export type Layout = "inline" | "stacked" | "stacked-full" | "standalone";

// Position
export type Position = "left" | "right" | "center";
