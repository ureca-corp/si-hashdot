import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HideOnScroll } from "./HideOnScroll";

export const PcHeader = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  return (
    <HideOnScroll>
      <div css={sx.root} className={scrollPosition < 52 ? "" : "headerBg"}>
        <nav>
          <ul css={sx.lists}>
            <li>
              <Link href="#">
                <Typography css={sx.list}>HOME</Typography>
              </Link>
            </li>
            <li>
              <Link href="#partners">
                <Typography css={sx.list}>PARTNERS</Typography>
              </Link>
            </li>
            <li>
              <Link href="#portfolio">
                <Typography css={sx.list}>PORTFOLIO</Typography>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </HideOnScroll>
  );
};

const sx = {
  root: css`
    position: fixed;
    width: 100%;

    z-index: 55;
    padding: 28px 0;
    &.headerBg {
      background-color: #22232f;
    }
  `,
  lists: css`
    display: flex;
    justify-content: center;
    gap: 70px;
    font-size: 16px;
    color: #fff;
    font-weight: 500;
  `,
  list: css`
    font-family: "Fjalla One", sans-serif !important;
  `,
};
