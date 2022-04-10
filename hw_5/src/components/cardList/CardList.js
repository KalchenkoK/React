import Card from "../card/Card";

export default function CardList(props) {
  return props.cards.map((el) => (
    <Card
      cards={el}
      key={el.id}
      onButtonDelete={props.onButtonDelete}
      onBlurTextChange={props.onBlurTextChange}
    />
  ));
}
