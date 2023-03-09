import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import { useState } from "react";
import { usePortfolioSection } from "./models/usePortfolioSection";

export const MobilePortfolioSection = () => {
  const { mobilePortfolios } = usePortfolioSection();
  const [value, setValue] = useState(0);
  const handleChange = (index: number) => {
    setValue(index);
  };

  return (
    <div css={sx.root} id="portfolio">
      <Stack css={sx.inner}>
        <Stack>
          <Typography css={sx.title}>Portfolio</Typography>
          <Stack css={sx.Images}>
            {mobilePortfolios.map((it, index) => (
              <div key={index} css={sx.wrap}>
                <div
                  onClick={() => handleChange(index)}
                  css={sx.logo(it.width, it.height)}
                  className="logo"
                >
                  <Image src={it.src} alt="logo" fill />
                </div>
                {value === index ? (
                  <Typography css={sx.text} className="text">
                    At eripuit signiferumque sea, vel ad mucius{"\n"}molestie,
                    cu labitur iuvaret vulputate sed.
                  </Typography>
                ) : null}
              </div>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    background-color: #fff;
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
    font-size: 7.778vw;
    margin-bottom: 18.889vw;
    text-align: center;
    color: #22232f;
  `,
  Images: css`
    width: 100%;
    gap: 15.556vw;
    align-items: center;
    justify-items: center;
  `,
  wrap: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  `,
  logo: (width: string, height: string) => css`
    width: ${width};
    height: ${height};
    position: relative;
  `,
  text: css`
    width: 100%;
    font-size: 3.333vw;
    line-height: 5.556vw;
    text-align: center;
    color: #373f41;
    margin-top: 5vw;
  `,
};
