import fantasyTown from "@/fantasy_town.png";
import battlas from "@/battlas.png";
import balloonBattle from "@/balloon_battle.png";
import ailey from "@/ailey.png";
import runToRun from "@/runtorun.png";
import gunlancer from "@/gunlancer.png";
import solana from "@/solana.png";
import fara from "@/logo_faraland.png";
import gameFi from "@/logo_GameFi.png";
import melon from "@/logo_melon.png";
import metaracers from "@/logo_metaracers.png";
import starpunk from "@/logo_starpunk.png";
import solchicks from "@/logo_solchicks.png";
import mytheria from "@/logo_myteria.png";

export const usePortfolioSection = () => {
  const portfolios = [
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
      src: balloonBattle,
      width: "10.99vw",
      height: "5.885vw",
    },
    {
      src: fara,
      width: "8.6979vw",
      height: "5.9375vw",
    },
    {
      src: solchicks,
      width: "17.2396vw",
      height: "3.2292vw",
    },
    {
      src: melon,
      width: "13.4375vw",
      height: " 4.2188vw",
    },
    {
      src: metaracers,
      width: "15.1563vw",
      height: "3.4896vw",
    },

    {
      src: starpunk,
      width: "18.6458vw",
      height: "4.8438vw",
    },

    {
      src: gameFi,
      width: "15.8854vw",
      height: "4.4271vw",
    },

    {
      src: mytheria,
      width: "13.0208vw",
      height: "6.3542vw",
    },
    // {
    //   src: gunlancer,
    //   width: "13.281vw",
    //   height: "5.313vw",
    // },
    // {
    //   src: ailey,
    //   width: "11.458vw",
    //   height: "5.156vw",
    // },
  ];

  const mobilePortfolios = [
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
      src: balloonBattle,
      width: "33.611vw",
      height: "18.611vw",
    },
    {
      src: fara,
      width: " 31.9444vw",
      height: "21.6667vw",
    },
    {
      src: solchicks,
      width: "55.5556vw",
      height: "10.2778vw",
    },
    {
      src: melon,
      width: "43.6111vw",
      height: "13.6111vw",
    },
    {
      src: metaracers,
      width: " 51.9444vw",
      height: "11.9444vw",
    },

    {
      src: starpunk,
      width: "59.4444vw",
      height: "15.5556vw",
    },

    {
      src: gameFi,
      width: "53.0556vw",
      height: "14.7222vw",
    },

    {
      src: mytheria,
      width: "47.5vw",
      height: "23.3333vw",
    },
    ////

    // {
    //   src: gunlancer,
    //   width: "43.333vw",
    //   height: "17.778vw",
    // },
  ];
  return { portfolios, mobilePortfolios };
};
