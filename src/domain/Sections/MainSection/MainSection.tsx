import { css } from "@emotion/react";
import Image from "next/image";
import logo from "@/hashdot_logo.png";
import { Stack, Typography } from "@mui/material";
import { MediaQueries, useCustomMediaQuery } from "@/common/theme/screen";

export const MainSection = () => {
  const { isSmall } = useCustomMediaQuery();
  return (
    <div css={sx.root}>
      <div css={sx.inner}>
        {isSmall ? (
          <div css={sx.logo}>
            <Image src={logo} alt="logo" fill />
          </div>
        ) : (
          <Image src={logo} alt="logo" width={373} height={72} />
        )}
        <Stack css={sx.bodyText}>
          <Typography css={sx.text}>
            Hashdot is a financial services company specializing in management
            equity & crypto investment.
          </Typography>
          <Typography css={sx.text}>
            Hashdot aims for stable operation, expert innovation, and capital
            value improvement for the growth of high potential companies around
            the world.
          </Typography>
          <Typography css={sx.text}>
            Hashdot consistently provides high-quality planning and
            multi-faceted services for target investors and partners.
          </Typography>
        </Stack>
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    background-color: #f3f6fa;
    display: flex;
    justify-content: center;
    padding: 9.375vw 0 7.813vw 0;
    @media ${MediaQueries.sm} {
      padding: 27.776vw 0 37.221vw 0;
    }
  `,
  inner: css`
    max-width: 795px;
    width: 90%;
    @media ${MediaQueries.sm} {
      width: 100%;
      padding: 0 30px;
    }
  `,
  logo: css`
    width: 83.3vw;
    height: 15.8vw;
    position: relative;
  `,
  title: css`
    margin-top: 50px;
  `,
  bodyText: css`
    margin-top: 59px;
    font-size: 16px;
    line-height: 160%;
    color: #737b7d;
    gap: 14px;
    @media ${MediaQueries.sm} {
      gap: 0;
      line-height: 160%;
    }
  `,
  text: css`
    @media ${MediaQueries.sm} {
      font-size: 4.444vw;
      line-height: 160%;
    }
  `,
};
