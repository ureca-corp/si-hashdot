import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Link from "next/link";

export const Header = () => {
  return (
    <div css={sx.root}>
      <nav>
        <ul css={sx.lists}>
          <li>
            <Link href="#">
              <Typography>Home</Typography>
            </Link>
          </li>
          <li>
            <Link href="#partners">
              <Typography>Partners</Typography>
            </Link>
          </li>
          <li>
            <Link href="#portfolio">
              <Typography>Portfolio</Typography>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    background-color: rgba(60, 100, 177, 0.06);

    padding: 28px 0;
  `,
  lists: css`
    display: flex;
    justify-content: center;
    gap: 70px;
    font-size: 16px;
    color: #000;
    font-weight: 500;
  `,
};