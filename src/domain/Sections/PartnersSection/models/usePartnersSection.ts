import solana from "@/solana.png";
import fantasyTown from "@/fantasy_town.png";
import battlas from "@/battlas.png";
import balloonBattle from "@/balloon_battle.png";
import avalanche from "@/avalanche.png";
export const usePartnersSection = () => {
  const partners = [
    {
      src: solana,
      width: "13.3vw",
      height: "3.64vw",
      description:
        " At eripuit signiferumque sea, vel ad mucius\nmolestie, culabitur iuvaret vulputate sed.",
    },
    {
      src: avalanche,
      width: "17.1875vw",
      height: "3.5938vw",
      description:
        " At eripuit signiferumque sea, vel ad mucius\nmolestie, culabitur iuvaret vulputate sed.",
    },
    {
      src: battlas,
      width: "11.823vw",
      height: "5.26vw",
      description:
        " At eripuit signiferumque sea, vel ad mucius\nmolestie, culabitur iuvaret vulputate sed.",
    },
    {
      src: fantasyTown,
      width: "15.833vw",
      height: "5.938vw",
      description:
        " At eripuit signiferumque sea, vel ad mucius\nmolestie, culabitur iuvaret vulputate sed.",
    },
  ];

  const MobilePartners = [
    {
      src: solana,
      width: "51.667vw",
      height: "13.889vw",
    },
    {
      src: avalanche,
      width: "57.5vw",
      height: "11.6667vw",
      description:
        " At eripuit signiferumque sea, vel ad mucius\nmolestie, culabitur iuvaret vulputate sed.",
    },
    {
      src: battlas,
      width: "36.9444vw",
      height: "16.3889vw",
      description:
        " At eripuit signiferumque sea, vel ad mucius\nmolestie, culabitur iuvaret vulputate sed.",
    },
    {
      src: fantasyTown,
      width: "52.7778vw",
      height: "20vw",
      description:
        " At eripuit signiferumque sea, vel ad mucius\nmolestie, culabitur iuvaret vulputate sed.",
    },
  ];

  return { partners, MobilePartners };
};
