import { Component } from "react";
import { API_URL } from "../../constants";
import Contact from "../contact/Contact";
import Form from "../form/form";
import "./contacts.css";
export default class Contacts extends Component {
  state = {
    contacts: [],
    isVisible: true,
    newName: "",
    newSername: "",
    phone: "",
  };

  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
    this.onButtonDelete = this.onButtonDelete.bind(this);
    this.onChangeButton = this.onChangeButton.bind(this);
    this.onResetButton = this.onResetButton.bind(this);
    this.onInputChangeName = this.onInputChangeName.bind(this);
    this.onInputChangeSurname = this.onInputChangeSurname.bind(this);
    this.onInputChangePhone = this.onInputChangePhone.bind(this);
    this.onSubmitButtonClick = this.onSubmitButtonClick.bind(this);
  }
  render() {
    const { isVisible, contacts } = this.state;
    return (
      <>
        {isVisible &&
          contacts.map((el) => {
            return (
              <Contact
                state={el}
                key={el.id}
                onButtonDelete={this.onButtonDelete}
              />
            );
          })}
        {isVisible && (
          <button className="changeBtn" onClick={this.onChangeButton}>
            Add new contact
          </button>
        )}

        {!isVisible && (
          <Form
            onResetButton={this.onResetButton}
            isVisible={isVisible}
            onInputChangeName={this.onInputChangeName}
            onInputChangeSurname={this.onInputChangeSurname}
            onInputChangePhone={this.onInputChangePhone}
            onSubmitButtonClick={this.onSubmitButtonClick}
          />
        )}
      </>
    );
  }
  componentDidMount() {
    fetch(API_URL)
      .then((resp) => resp.json())
      .then((data) => this.setState({ contacts: data }));
  }

  onButtonDelete(id) {
    fetch(API_URL + "/" + id, {
      method: "DELETE",
    }).then((resp) => {
      const newContacts = this.state.contacts.filter(
        (contact) => contact.id !== id
      );
      this.setState({ contacts: newContacts });
    });
  }
  onChangeButton() {
    const { isVisible } = this.state;
    this.setState({ isVisible: !isVisible });
  }
  onResetButton() {
    const { isVisible } = this.state;
    this.setState({ isVisible: !isVisible });
  }
  onInputChangeName(e) {
    this.setState({ newName: e.target.value });
  }
  onInputChangeSurname(e) {
    this.setState({ newSername: e.target.value });
  }
  onInputChangePhone(e) {
    this.setState({ phone: e.target.value });
  }
  onSubmitButtonClick(e) {
    e.preventDefault();
    const { isVisible, contacts, newName, newSername, phone } = this.state;
    const newItem = {
      name: newName,
      sername: newSername,
      phone: phone,
    };
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    })
      .then((resp) => resp.json())
      .then((data) =>
        this.setState({
          contacts: [...contacts, data],
          isVisible: !isVisible,
          newName: "",
          newSername: "",
          phone: "",
        })
      );
  }
}
