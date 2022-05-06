import { useEffect, useState } from "react";
import { getGifList } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifList(category).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [category]);

  return state;
};
