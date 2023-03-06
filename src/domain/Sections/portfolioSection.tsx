import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";

export const PortfolioSection = () => {
  const partners = [
    {
      name: "solana",
      width: 256,
      height: 70,
    },
    {
      name: "balloon",
      width: 211,
      height: 113,
    },
    {
      name: "balloon",
      width: 211,
      height: 113,
    },
  ];

  return (
    <div css={sx.root}>
      <Stack css={sx.inner}>
        <Stack>
          <Typography css={sx.title}>Partners</Typography>
          <div css={sx.Images}>
            <Image src={"/solana.png"} alt="logo" width={256} height={70} />
          </div>
        </Stack>
        <Stack>
          <Typography css={sx.title}>Portfolio</Typography>
          <div css={sx.Images}>
            <Image src={"/solana.png"} alt="logo" width={256} height={70} />
            <Image
              src={"/balloon_battle.png"}
              alt="logo"
              width={211}
              height={113}
            />
            <Image
              src={"/balloon_battle.png"}
              alt="logo"
              width={211}
              height={113}
            />
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
    padding: 150px 0 270px 0;
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
    margin-bottom: 149px;
  `,
  Images: css`
    display: flex;
    max-width: 1024px;
    flex-wrap: wrap;
    gap: 7.8vw;
    justify-content: center;
    align-items: center;
  `,
};
