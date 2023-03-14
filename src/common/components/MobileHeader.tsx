import { css } from "@emotion/react";
import menu from "@/icons/menu.png";
import close from "@/icons/close.png";
import Image from "next/image";
import { Dialog, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import menuLogo from "@/Menu-Logo.png";
import { BannerSection } from "@/domain/Sections/MainSection";
import Link from "next/link";
import { HideOnScroll } from "./HideOnScroll";
import mbBg from "@/mb-bg.png";

export const MobileHeader = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
        <MenuButton onClick={handleClickOpen} text="Menu" isMenuOpen={open} />

        <MobileMenu open={open} onClose={handleClose} />
      </div>
    </HideOnScroll>
  );
};

type MenuButtonType = {
  onClick: () => void;
  text: string;
  isMenuOpen: boolean;
};

export const MenuButton = ({ onClick, text, isMenuOpen }: MenuButtonType) => {
  return (
    <div css={sx.menuWrap}>
      <span css={sx.menu}>{text}</span>
      <IconButton onClick={onClick}>
        {isMenuOpen ? (
          <Image src={close} alt="close" width={24} height={24} />
        ) : (
          <Image src={menu} alt="menu" width={24} height={24} />
        )}
      </IconButton>
    </div>
  );
};

type MobileMenuType = {
  onClose: () => void;
  open: boolean;
};
export const MobileMenu = ({ onClose, open }: MobileMenuType) => {
  return (
    <Dialog open={open} fullScreen>
      <div css={sx.dialog}>
        <div css={sx.menuHeader}>
          <div css={sx.menuLogo}>
            <Image src={menuLogo} alt="logo" fill />
          </div>

          <MenuButton onClick={onClose} text="Close" isMenuOpen={open} />
        </div>
        <ul css={sx.lists}>
          <li>
            <Link href="#Home" onClick={onClose}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#partners" onClick={onClose}>
              Partners
            </Link>
            {/* <Link href="#Home">Partners</Link> */}
          </li>
          <li>
            <Link href="#portfolio" onClick={onClose}>
              Portfolio
            </Link>
          </li>
        </ul>
        <div css={sx.bg}>
          <Image src={mbBg} alt="background" fill />
        </div>
      </div>
      <BannerSection />
    </Dialog>
  );
};

const sx = {
  root: css`
    width: 100%;
    position: fixed;
    right: 0;
    padding: 6.944vw 6.111vw 6.944vw 0;
    display: flex;
    justify-content: end;
    z-index: 55;
    &.headerBg {
      background-color: #22232f;
    }
  `,
  menu: css`
    font-weight: 500;
    font-size: 4.444vw;
    color: #b4b8bf;
  `,
  menuWrap: css`
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    z-index: 550;
  `,
  dialog: css`
    background: #22232f;
    position: relative;
    padding: 6.944vw 6.111vw 0 5.278vw;
    height: 100%;
  `,
  menuHeader: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  menuLogo: css`
    position: relative;
    width: 34.722vw;
    aspect-ratio: 1/0.32;
  `,
  lists: css`
    font-weight: 500;
    margin-top: 88px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 11.111vw;
    font-family: "Fjalla One";
    color: #fff;
    font-size: 5vw;
    position: relative;
    z-index: 550;
  `,
  bg: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply;
  `,
};
