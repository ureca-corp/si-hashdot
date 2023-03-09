import { css } from "@emotion/react";
import menu from "@/icons/menu.png";
import close from "@/icons/close.png";
import Image from "next/image";
import { Dialog, IconButton } from "@mui/material";
import { useState } from "react";
import menuLogo from "@/menuLogo.png";
import { BannerSection } from "@/domain/Sections/MainSection";
import Link from "next/link";

export const MobileHeader = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div css={sx.root}>
      <MenuButton onClick={handleClickOpen} text="Menu" isMenuOpen={open} />

      <MobileMenu open={open} onClose={handleClose} />
    </div>
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
      </div>
      <BannerSection />
    </Dialog>
  );
};

const sx = {
  root: css`
    background-color: #f3f6fa;
    padding: 30px 19px 0 19px;
    display: flex;
    justify-content: end;
  `,
  menu: css`
    font-weight: 500;
    font-size: 16px;
    color: #b4b8bf;
  `,
  menuWrap: css`
    display: flex;
    align-items: center;
    gap: 10px;
  `,
  dialog: css`
    background-color: rgba(60, 100, 177, 0.06);
    padding: 30px 19px 0 19px;
    height: 100%;
  `,
  menuHeader: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  menuLogo: css`
    position: relative;
    width: 37.5vw;
    aspect-ratio: 1/0.296;
  `,
  lists: css`
    font-weight: 500;
    margin-top: 88px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  `,
};
