import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import "@testing-library/jest-dom";
import MainContent from "./MainContent";

const handlers = [
  rest.get("https://api.disneyapi.dev/character", (req, res, ctx) => {
    return res(
      ctx.json({
        info: {
          count: 2,
          totalPages: 1,
          previousPage: null,
          nextPage: "http://api.disneyapi.dev/character?page=2&pageSize=50",
        },
        data: [
          {
            _id: 112,
            films: ["Hercules (film)"],
            videoGames: ["Kingdom Hearts III"],
            name: "Achilles",
            imageUrl:
              "https://static.wikia.nocookie.net/disney/images/d/d3/Vlcsnap-2015-05-06-23h04m15s601.png",
          },
          {
            _id: 18,
            films: ["The Fox and the Hound"],
            name: "Abigail the Cow",
            imageUrl:
              "https://static.wikia.nocookie.net/disney/images/0/05/Fox-disneyscreencaps_com-901.jpg",
          },
        ],
      })
    );
  }),
];

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

test("shows two characters", async () => {
  render(<MainContent />);

  await pause();
  screen.debug();
});

const pause = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
