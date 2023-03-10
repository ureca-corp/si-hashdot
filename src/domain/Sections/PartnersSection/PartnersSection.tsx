import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { css } from "@emotion/react";
import { usePartnersSection } from "./models/usePartnersSection";

export const PartnersSection = () => {
  const { partners } = usePartnersSection();
  return (
    <div css={sx.root} id="partners">
      <Stack css={sx.inner}>
        <Stack>
          <Typography css={sx.title}>PARTNERS</Typography>
          <div css={sx.Images}>
            {partners.map((it, index) => (
              <div key={index} css={sx.wrap}>
                <div css={sx.logo(it.width, it.height)} className="logo">
                  <Image src={it.src} alt="logo" fill />
                </div>
                <div css={sx.text} className="text">
                  {it.description}
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
    padding: 7.813vw 0 0 0;
  `,
  inner: css`
    max-width: 1024px;
    width: 90%;
    align-items: center;
    margin: 0 auto;
    gap: 250px;
  `,
  title: css`
    font-size: 2.5vw;
    margin-bottom: 8.9vw;
    text-align: center;
    color: #22232f;
    font-family: "Fjalla One";
  `,

  Images: css`
    width: 53.333vw;
    display: flex;
    flex-flow: wrap;
    justify-content: center;

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
    align-items: center;
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
    align-items: center;
  `,
  text: css`
    position: absolute;
    top: 0vw;
    left: 0.5vw;
    width: 16.667vw;
    font-size: 0.729vw;
    line-height: 1.242vw;
    color: #373f41;
    white-space: pre-wrap;
    display: flex;
    justify-content: center;
    opacity: 0;
    text-align: center;
    height: 100%;
    align-items: center;
    font-family: "Mulish";
  `,
};
