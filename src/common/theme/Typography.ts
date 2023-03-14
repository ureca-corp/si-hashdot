import { TypographyOptions } from "@mui/material/styles/createTypography";

const baseTypographyOptions: TypographyOptions = {
  fontFamily: "IBM Plex Mono",
  allVariants: {
    whiteSpace: "pre-wrap",
  },
};

export const lightTypographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
};
