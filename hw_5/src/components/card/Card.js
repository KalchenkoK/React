export default function Card(props) {
  const { description, id } = props.cards;
  return (
    <div>
      <textarea
        name="12"
        id="12"
        cols="10"
        rows="10"
        defaultValue={description}
        onBlur={(e) => {
          props.onBlurTextChange(e, id);
        }}
      ></textarea>
      <button onClick={() => props.onButtonDelete(id)}>Close</button>
    </div>
  );
}
