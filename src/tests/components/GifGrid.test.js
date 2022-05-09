import { shallow } from "enzyme";
import React from "react";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en el <GrifGrid />", () => {
  const category = "One Punch";

  test("debe de mostrarse correctamente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar items cuando se cargan imagenes useFechGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "One Punch",
        url: "https://localhost/children.gif",
      },
      {
        id: "123",
        title: "One Punch",
        url: "https://localhost/children.gif",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    // expect(wrapper).toMatchSnapshot();
    expect(wrapper).find("p").exist().toBe(false);
    expect(wrapper).find("GifGridItem").length(gifs.length);
  });
});
