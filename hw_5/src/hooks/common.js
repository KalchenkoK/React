import { useState } from "react";

export function useAsync(cb, defaultValue = []) {
  const [cards, setCards] = useState(defaultValue);
  

  function run() {
    cb()
      .then((cards) => {
        setCards(cards);
        return cards;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

  return {
    cards,
    setCards,
    run,
  };
}
