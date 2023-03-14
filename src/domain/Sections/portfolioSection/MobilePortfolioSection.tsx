import { css } from "@emotion/react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
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
              <Accordion
                disableGutters={true}
                expanded={value == index}
                onChange={() => handleChange(index)}
                key={index}
                css={sx.wrap}
              >
                <AccordionSummary
                  css={sx.logo(it.width, it.height)}
                  className="logo"
                >
                  <Image src={it.src} alt="logo" fill />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography css={sx.text} className="text">
                    {it.text}
                  </Typography>
                </AccordionDetails>
              </Accordion>
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
    padding-top: 12.333vw;
    padding-bottom: 41.667vw;
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
    box-shadow: none;
    &::before {
      background-color: #fff;
    }
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
    font-family: "Mulish";
  `,
};
