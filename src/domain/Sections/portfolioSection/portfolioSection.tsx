import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import { usePortfolioSection } from "./models/usePortfolioSection";

export const PortfolioSection = () => {
  const { portfolios } = usePortfolioSection();

  return (
    <div css={sx.root} id="portfolio">
      <Stack css={sx.inner}>
        <Stack>
          <Typography css={sx.title}>Portfolio</Typography>
          <div css={sx.Images}>
            {portfolios.map((it, index) => (
              <div key={index} css={sx.wrap}>
                <div css={sx.logo(it.width, it.height)} className="logo">
                  <Image src={it.src} alt="logo" fill />
                </div>
                <div css={sx.text} className="text">
                  At eripuit signiferumque sea, vel ad mucius{"\n"}molestie, cu
                  labitur iuvaret vulputate sed.
                </div>
              </div>
            ))}
          </div>
        </Stack>
      </Stack>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    background-color: #fff;
    padding-top: 6.25vw;
    padding-bottom: 14.115vw;
  `,
  inner: css`
    max-width: 1024px;
    width: 90%;
    align-items: center;
    margin: 0 auto;
    gap: 250px;
  `,
  title: css`
    font-weight: 700;
    font-size: 1.667vw;
    margin-bottom: 7.76vw;
    text-align: center;
    color: #22232f;
  `,
  // Images: css`
  //   display: grid;
  //   grid-template-columns: 1fr 1fr 1fr;
  //   width: 100%;
  //   row-gap: 7.8vw;
  //   column-gap: 10.677vw;
  //   align-items: center;
  //   justify-items: center;
  // `,
  Images: css`
    width: 53.333vw;
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    /* gap: 6.458vw; */

    /* row-gap: 7.8vw;
  column-gap: 10.677vw; */
    align-items: center;
    justify-items: center;
  `,
  wrap: css`
    position: relative;
    width: calc(53.333vw / 3);
    height: 5.938vw;
    display: flex;
    justify-content: center;
    margin-bottom: 9.635vw;
    cursor: pointer;
    &:hover {
      .text {
        opacity: 1;
      }
      .logo {
        opacity: 0;
      }
    }
  `,
  logo: (width: string, height: string) => css`
    width: ${width};
    height: ${height};
    position: relative;
    display: flex;
    justify-content: center;
  `,
  text: css`
    position: absolute;
    top: 10px;
    left: 0;
    width: 16.667vw;
    font-size: 0.729vw;
    line-height: 1.242vw;
    color: #373f41;
    white-space: pre-wrap;
    display: flex;
    opacity: 0;
    text-align: center;
  `,
};