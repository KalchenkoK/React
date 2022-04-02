import Contact from "../contactItem/ContactItem";

export default function ContactList(props) {
  return props.contacts.map((el) => (
    <Contact contact={el} key={el.id} onButtonDelete={props.onButtonDelete} />
  ));
}
