import { css } from "@emotion/react";
import Image from "next/image";
import logo from "@/Logo.png";
import { Stack, Typography } from "@mui/material";
import { MediaQueries, useCustomMediaQuery } from "@/common/theme/screen";
import bg from "@/bg.png";
import mbBg from "@/mb-bg.png";

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
          <div css={sx.pcLogo}>
            <Image src={logo} alt="logo" fill />
          </div>
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
      {isSmall ? (
        <div css={sx.mbBg}>
          <Image src={mbBg} alt="background" fill></Image>
        </div>
      ) : (
        <div css={sx.bg}>
          <Image src={bg} alt="background" fill></Image>
        </div>
      )}
    </div>
  );
};

const sx = {
  root: css`
    position: relative;
    width: 100%;
    background: #22232f;
    display: flex;
    justify-content: center;
    padding: 11.042vw 0 10.573vw 0;
    aspect-ratio: 1/0.355;
    @media ${MediaQueries.sm} {
      padding: 36.776vw 0 0 0;
      aspect-ratio: 1/1.75;
    }
  `,
  inner: css`
    width: 90%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 3.125vw;
    @media ${MediaQueries.sm} {
      width: 100%;
      padding: 0 8.333vw;
      gap: 13.889vw;
      flex-direction: column;
    }
  `,
  logo: css`
    width: 80.833vw;
    height: 16.111vw;
    position: relative;
    z-index: 5;
  `,
  pcLogo: css`
    position: relative;
    width: 18.177vw;
    aspect-ratio: 1/0.206;
  `,
  title: css`
    margin-top: 50px;
  `,
  bodyText: css`
    position: relative;
    z-index: 45;
    max-width: 652.992px;
    /* width: 33.958vw; */

    color: #fff;
    gap: 1.042vw;
    @media ${MediaQueries.sm} {
      gap: 5.556vw;
    }
  `,
  text: css`
    font-size: 0.833vw;
    line-height: 180%;
    @media ${MediaQueries.sm} {
      font-size: 3.333vw;
      line-height: 180%;
    }
  `,
  bg: css`
    position: absolute;
    width: 78.906vw;
    aspect-ratio: 1/0.45;
    top: 0;
    right: 0;
    mix-blend-mode: multiply;
  `,
  mbBg: css`
    position: absolute;
    width: 100%;
    aspect-ratio: 1/1.75;
    top: 0;
    left: 0;
    mix-blend-mode: multiply;
  `,
};
