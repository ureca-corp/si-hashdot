import { MediaQueries } from "@/common/theme/screen";
import { css } from "@emotion/react";
import { Stack, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Stack css={sx.root}>
      <Typography css={sx.top}>{"Eat, Sleep, Hype, Repeat :)"}</Typography>

      <Typography css={sx.bottom}>
        © 2022 HASHDOT All rights reserved.
      </Typography>
    </Stack>
  );
};

const sx = {
  root: css`
    background-color: rgba(60, 100, 177, 0.06);
    padding: 1.875vw 0 2.188vw 0;
    gap: 14px;
    align-items: center;
    @media ${MediaQueries.sm} {
      padding: 10.278vw 0 13.889vw 0;
    }
  `,
  top: css`
    color: #373f41;
    font-weight: 500;
    font-size: 0.833vw;
    line-height: 150%;
    @media ${MediaQueries.sm} {
      font-size: 4.444vw;
    }
  `,
  bottom: css`
    font-family: "Lato";
    text-align: center;
    color: #b4b8bf;
    font-size: 0.573vw;
    @media ${MediaQueries.sm} {
      font-size: 3.056vw;
      line-height: 150%;
    }
  `,
};
