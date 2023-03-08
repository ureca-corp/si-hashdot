import fantasyTown from "@/fantasy_town.png";
import battlas from "@/battlas.png";
import balloonBattle from "@/balloon_battle.png";
import ailey from "@/ailey.png";
import runToRun from "@/runtorun.png";
import gunlancer from "@/gunlancer.png";

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
  ];

  return { portfolios };
};
