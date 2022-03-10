import { rest } from "msw";

export type HoldInfo = {
  name: string;
  capital: string;
  jarl: string;
  allegiance: "Stormcloak" | "Imperial" | "Neutral";
};

export const handlers = [
  rest.get("/api/holds", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "Eastmarch",
          capital: "Windhelm",
          jarl: "Ulfric Stormcloak",
          allegiance: "Stormcloak",
        },
        {
          name: "Falkreath",
          capital: "Falkreath",
          jarl: "Siddgeir",
          allegiance: "Imperial",
        },
        {
          name: "Haafingar",
          capital: "Solitude",
          jarl: "Elisif the Fair",
          allegiance: "Imperial",
        },
        {
          name: "Hjaalmarch",
          capital: "Morthal",
          jarl: "Idgrod Ravencrone",
          allegiance: "Imperial",
        },
        {
          name: "The Pale",
          capital: "Dawnstar",
          jarl: "Skald the Elder",
          allegiance: "Stormcloak",
        },
        {
          name: "The Reach",
          capital: "Markarth",
          jarl: "Igmund",
          allegiance: "Imperial",
        },
        {
          name: "The Rift",
          capital: "Riften",
          jarl: "Laila Law-Giver",
          allegiance: "Stormcloak",
        },
        {
          name: "Whiterun",
          capital: "Whiterun",
          jarl: "Balgruuf the Greater",
          allegiance: "Neutral",
        },
        {
          name: "Winterhold",
          capital: "Winterhold",
          jarl: "Korir",
          allegiance: "Stormcloak",
        },
      ])
    );
  }),
];
