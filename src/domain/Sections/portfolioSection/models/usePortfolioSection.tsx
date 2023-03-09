import fantasyTown from "@/fantasy_town.png";
import battlas from "@/battlas.png";
import balloonBattle from "@/balloon_battle.png";
import ailey from "@/ailey.png";
import runToRun from "@/runtorun.png";
import gunlancer from "@/gunlancer.png";
import solana from "@/solana.png";

export const usePortfolioSection = () => {
  const portfolios = [
    {
      src: fantasyTown,
      width: "15.833vw",
      height: "5.938vw",
    },
    {
      src: battlas,
      width: "11.823vw",
      height: "5.26vw",
    },
    {
      src: balloonBattle,
      width: "10.99vw",
      height: "5.885vw",
    },
    {
      src: solana,
      width: "13.3vw",
      height: "3.64vw",
    },
    {
      src: runToRun,
      width: "14.479vw",
      height: "3.698vw",
    },
    {
      src: gunlancer,
      width: "13.281vw",
      height: "5.313vw",
    },
    {
      src: ailey,
      width: "11.458vw",
      height: "5.156vw",
    },
    {
      src: runToRun,
      width: "14.479vw",
      height: "3.698vw",
    },
    {
      src: gunlancer,
      width: "13.281vw",
      height: "5.313vw",
    },
    {
      src: ailey,
      width: "11.458vw",
      height: "5.156vw",
    },
  ];

  const mobilePortfolios = [
    {
      src: fantasyTown,
      width: "52.778vw",
      height: "20vw",
    },
    {
      src: battlas,
      width: "36.944vw",
      height: "16.389vw",
    },
    {
      src: balloonBattle,
      width: "33.611vw",
      height: "18.611vw",
    },
    {
      src: ailey,
      width: "37.778vw",
      height: "16.944vw",
    },
    {
      src: runToRun,
      width: "50vw",
      height: "12.222vw",
    },
    {
      src: gunlancer,
      width: "43.333vw",
      height: "17.778vw",
    },
  ];
  return { portfolios, mobilePortfolios };
};
