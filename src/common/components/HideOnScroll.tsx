import { Slide, useScrollTrigger } from "@mui/material";

type HideOnScrollType = {
  window?: () => Window;
  children: React.ReactElement;
};
export const HideOnScroll = ({ window, children }: HideOnScrollType) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
