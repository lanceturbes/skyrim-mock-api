import { rest } from "msw";

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
          name: "Whiterun",
          capital: "Whiterun",
          jarl: "Balgruuf the Greater",
          allegiance: "Neutral",
        },
      ])
    );
  }),
];
