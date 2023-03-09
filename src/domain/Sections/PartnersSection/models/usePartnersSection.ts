import solana from "@/solana.png";
import fantasyTown from "@/fantasy_town.png";
import battlas from "@/battlas.png";
import balloonBattle from "@/balloon_battle.png";

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
      src: fantasyTown,
      width: "15.833vw",
      height: "5.938vw",
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
      src: balloonBattle,
      width: "10.99vw",
      height: "5.885vw",
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
      src: solana,
      width: "51.667vw",
      height: "13.889vw",
      description:
        " At eripuit signiferumque sea, vel ad mucius\nmolestie, culabitur iuvaret vulputate sed.",
    },
    {
      src: solana,
      width: "51.667vw",
      height: "13.889vw",
      description:
        " At eripuit signiferumque sea, vel ad mucius\nmolestie, culabitur iuvaret vulputate sed.",
    },
  ];

  return { partners, MobilePartners };
};
