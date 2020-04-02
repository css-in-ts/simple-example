import config from "../config";
import { SpaceProperties } from "../types/composite";
import { Size } from "../types/primitive";
import { convertToUnits, sizeMap } from "./makeSize";

// const baselineGridMismatchWarning = (
//   sizeValue: number
// ): string => `"${sizeValue}" is not a multiple of your baselineGrid of "${config.size.baselineGrid}".

// You have elected to use a "${config.size.spaceScale}" spacing system. This means that you may provide a custom pixel value but that value must be a multiple of your baselineGrid.

// Check the "config.size.baselineGrid" value of your config.size again and make sure that you're providing a spacing value that is a correct multiple of your grid system.`;

const alignsToBaselineGrid = (sizeValue: number): boolean =>
  sizeValue % config.size.baselineGrid === 0;

const createLinearSpaceSize = (sizeValue: number): string => {
  if (alignsToBaselineGrid(sizeValue)) {
    return convertToUnits(sizeValue);
  }
  return "";
  // throw new Error(baselineGridMismatchWarning(sizeValue));
};

const createCustomSpaceSize = (sizeValue: number): string => {
  if (!alignsToBaselineGrid(sizeValue)) {
    // console.warn(baselineGridMismatchWarning(sizeValue));
  }
  return convertToUnits(sizeValue);
};

const createExponentialSpaceSize = (sizeValue: Size): string => {
  return sizeMap.size[sizeValue][config.size.sizeUnits];
};

export const makeSpace = (value: SpaceProperties): string => {
  if (typeof value === "number" && config.size.spaceScale === "linear") {
    return createLinearSpaceSize(value);
  }
  if (typeof value === "string" && value !== "auto") {
    return createExponentialSpaceSize(value);
  }
  if (typeof value === "string" && value === "auto") {
    return value;
  }
  if (typeof value === "object" && value.custom) {
    return createCustomSpaceSize(value.custom);
  }
  return "NO DEFINITION PROVIDED";
};
