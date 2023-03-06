import { css } from "@emotion/react";
import Image from "next/image";
import logo from "@/hashdot_logo.png";
import { Typography } from "@mui/material";
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

        <Typography css={sx.title}>{"{About}"}</Typography>
        <Typography css={sx.bodyText}>
          Hashdot is a financial services company specializing in management
          equity & crypto investment.{"\n"}Hashdot aims for stable operation,
          expert innovation, and capital value improvement for the growth of
          high potential companies around the world.{"\n"}Hashdot consistently
          provides high-quality planning and multi-faceted services for target
          investors and partners.
        </Typography>
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    background-color: rgba(60, 100, 177, 0.06);
    display: flex;
    justify-content: center;
    padding: 100px 0 150px 0;
    @media ${MediaQueries.sm} {
      padding: 100px 0;
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
    margin-top: 20px;
    font-size: 16px;
    color: #737b7d;
  `,
};
