import { useCustomMediaQuery } from "../theme/screen";
import { MobileHeader } from "./MobileHeader";
import { PcHeader } from "./PcHeader";

export const CustomAppbar = () => {
  const { isSmall } = useCustomMediaQuery();
  return <div>{isSmall ? <MobileHeader /> : <PcHeader />}</div>;
};
