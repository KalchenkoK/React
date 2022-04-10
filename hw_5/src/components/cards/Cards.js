import CardList from "../cardList/CardList";
import { useCallback, useEffect } from "react";
import * as cardsServices from "../../services/cardsServices";
import "./cards.css";
import { useAsync } from "../../hooks/common";

export default function Cards() {
  const { run, cards, setCards } = useAsync(cardsServices.getCards, []);
  useEffect(() => run(), []);

  const onButtonDelete = (id) => {
    const newCards = cards.filter((card) => card.id !== id);
    cardsServices.deleteCard(id).then(() => setCards(newCards));
  };

  const onButtonAdd = useCallback(() => {
    const newCard = {
      description: "",
    };
    cardsServices.createCard(newCard).then((data) => {
      setCards([...cards, data]);
    });
  }, [cards]);

  const onBlurTextChange = (e, id) => {
    const updatedCard = cards.find((card) => card.id === id);

    updatedCard.description = e.target.value;

    cardsServices
      .updateCard(id, updatedCard)
      .then(() =>
        setCards(cards.map((el) => (el.id === id ? updatedCard : el)))
      );
  };

  return (
    <>
      <button className="addBtn" onClick={onButtonAdd}>
        Add card
      </button>
      <div className="cards">
        <CardList
          cards={cards}
          onButtonDelete={onButtonDelete}
          onBlurTextChange={onBlurTextChange}
        />
      </div>
    </>
  );
}
