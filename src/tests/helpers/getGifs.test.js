import { getGifList } from "../../helpers/getGifs";

describe("pruebas con getGifs", () => {
  test("debe de traer 10 elementos", async () => {
    const gifs = await getGifList("One Punch");
    expect(gifs.length).toBe(10);
  });

  test("debe de traer 10 elementos", async () => {
    const gifs = await getGifList('');
    expect(gifs.length).toBe(0);
  });
});
