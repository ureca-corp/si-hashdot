import { Header } from "@/common/components";
import { BannerSection, MainSection, PortfolioSection } from "../Sections";

export const LandingView = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <BannerSection />
      <PortfolioSection />
    </div>
  );
};
