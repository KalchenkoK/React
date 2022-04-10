import "./contactItem.css";

export default function Contact(props) {
  const contact = props.contact;
  return (
    <>
      <div className="table">
        <div>{contact.name}</div>
        <div>{contact.sername}</div>
        <div>{contact.phone}</div>
        <button onClick={() => props.onButtonDelete(contact.id)}>Delete</button>
        <button onClick={() => props.onButtonUpdate(contact.id)}>Update</button>
      </div>
    </>
  );
}
