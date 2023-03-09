import { MobileHeader } from "@/common/components";
import { PcHeader } from "@/common/components/PcHeader";

import { useCustomMediaQuery } from "@/common/theme/screen";
import { Footer } from "../Sections/footer";
import {
  BannerSection,
  MainSection,
  PortfolioSection,
} from "../Sections/MainSection";
import {
  MobilePartnersSection,
  PartnersSection,
} from "../Sections/PartnersSection";
import { MobilePortfolioSection } from "../Sections/portfolioSection";

export const LandingView = () => {
  const { isSmall } = useCustomMediaQuery();
  return (
    <div>
      <MainSection />
      <BannerSection />
      {isSmall ? <MobilePartnersSection /> : <PartnersSection />}
      {isSmall ? <MobilePortfolioSection /> : <PortfolioSection />}
      <Footer />
    </div>
  );
};
