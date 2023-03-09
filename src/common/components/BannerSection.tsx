import { MediaQueries } from "@/common/theme/screen";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";

export const BannerSection = () => {
  return (
    <div css={sx.root}>
      <Typography css={sx.text}>
        {
          "{   Nam   no   suscipit   quaerendum.   At   nam   minimum   ponderum.    }"
        }
      </Typography>
    </div>
  );
};

const sx = {
  root: css`
    height: auto;
    padding: 14px 0;
    color: #fff;

    background: #000;
    text-align: center;
  `,
  text: css`
    width: 90%;
    margin: 0 auto;
    font-size: 14px;
    @media ${MediaQueries.sm} {
      font-size: 12px;
    }
  `,
};
