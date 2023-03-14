import { MediaQueries } from "@/common/theme/screen";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";

export const BannerSection = () => {
  return (
    <div css={sx.root}>
      <Typography css={sx.text}>{"Eat, Sleep, Hype, Repeat :)"}</Typography>
    </div>
  );
};

const sx = {
  root: css`
    height: auto;
    padding: 14px 0;
    color: #22232f;
    position: relative;
    background: #f3f6fa;
    text-align: center;
    @media ${MediaQueries.sm} {
      padding: 9.167vw 0;
    }
  `,
  text: css`
    width: 90%;
    margin: 0 auto;
    font-size: 14px;
    font-family: "IBM Plex Mono", monospace;
    font-weight: 500;
    @media ${MediaQueries.sm} {
      font-size: 3.333vw;
    }
  `,
};
