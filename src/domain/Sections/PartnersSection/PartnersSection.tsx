import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { css } from "@emotion/react";
import { usePartnersSection } from "./usePartnersSection";

export const PartnersSection = () => {
  const { partners } = usePartnersSection();
  return (
    <div css={sx.root}>
      <Stack css={sx.inner}>
        <Stack>
          <Typography css={sx.title}>Partners</Typography>
          <div css={sx.Images}>
            {partners.map((it, index) => (
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
    padding: 7.813vw 0 14.063vw 0;
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
    font-size: 32px;
    margin-bottom: 8.9vw;
    text-align: center;
  `,
  Images: css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    row-gap: 7.8vw;
    column-gap: 10.677vw;
    align-items: center;
    justify-items: center;
  `,
  wrap: css`
    position: relative;
    width: auto;
    height: 5.938vw;
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
  `,
  text: css`
    position: absolute;
    top: 10px;
    left: 0;
    width: 16.667vw;
    font-size: 0.729vw;
    line-height: 1.042vw;
    white-space: pre-wrap;
    opacity: 0;
    text-align: center;
  `,
};
