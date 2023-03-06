import { TypographyOptions } from "@mui/material/styles/createTypography";

const baseTypographyOptions: TypographyOptions = {
  fontFamily: "Lato",
  allVariants: {
    whiteSpace: "pre-wrap",
  },
};

export const lightTypographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
};
