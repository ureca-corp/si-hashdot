import { Header, MobileHeader } from "@/common/components";

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
      {isSmall ? <MobileHeader /> : <Header />}
      <MainSection />
      <BannerSection />
      {isSmall ? <MobilePartnersSection /> : <PartnersSection />}
      {isSmall ? <MobilePortfolioSection /> : <PortfolioSection />}
      <Footer />
    </div>
  );
};
