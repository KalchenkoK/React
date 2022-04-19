import "./contact.css";
export default function Contact(props) {
  const state = props.state;
  return (
    <>
      <div className="table">
        <div>{state.name}</div>
        <div>{state.sername}</div>
        <div>{state.phone}</div>
        <button onClick={() => props.onButtonDelete(state.id)}>Delete</button>
      </div>
    </>
  );
}
