import { useState } from "react";

export function useAsync(cb, defaultValue = []) {
  const [cards, setCards] = useState(defaultValue);
  // const [data, setData] = useState(defaultValue);

  function run() {
    //   setStatus("LOADING");

    cb()
      .then((cards) => {
        //   setStatus("DONE");
        setCards(cards);
        return cards;
      })
      .catch((error) => {
        // setStatus("ERROR");
        return Promise.reject(error);
      });
  }

  return {
    cards,
    setCards,
    run,
  };
}
