import { css } from "@emotion/react";
import { Typography } from "@mui/material";

export const Header = () => {
  return (
    <div css={sx.root}>
      <nav>
        <ul css={sx.lists}>
          <li>
            <Typography>[About]</Typography>
          </li>
          <li>
            <Typography>[Partners]</Typography>
          </li>
          <li>
            <Typography>[Portfolio]</Typography>
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
    color: #b4b8bf;
    border-bottom: 1px solid #d8d8d8;
    padding: 28px 0;
  `,
  lists: css`
    display: flex;
    justify-content: center;
    gap: 70px;
  `,
};
