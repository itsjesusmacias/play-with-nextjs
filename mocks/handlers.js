import { rest } from "msw";

// Cambiar al mio
const URL_MOCKED = "https://rickandmortyapi.com/api/character/?name=*";

// DATA to return
const results = [
  {
    id: 23,
    name: "Arcade Alien",
    status: "Alive",
    image: "https://rickandmortyapi.com/api/character/avatar/23.jpeg",
  },
];

export const handlers = [
  rest.get(URL_MOCKED, (_req, res, ctx) =>
    res(ctx.status(200), ctx.delay(500), ctx.json({ results }))
  ),
];
