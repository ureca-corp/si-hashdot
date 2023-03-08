import { Header, MobileHeader } from "@/common/components";

import { useCustomMediaQuery } from "@/common/theme/screen";
import {
  BannerSection,
  MainSection,
  PortfolioSection,
} from "../Sections/MainSection";
import { PartnersSection } from "../Sections/PartnersSection/PartnersSection";

export const LandingView = () => {
  const { isSmall } = useCustomMediaQuery();
  return (
    <div>
      {isSmall ? <MobileHeader /> : <Header />}
      <MainSection />
      <BannerSection />
      <PartnersSection />
      <PortfolioSection />
    </div>
  );
};
