import { Component } from "react";
import { nanoid } from "nanoid";
import { Book } from "./Book/Book";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
    ],
    name: '',
    number: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addContact = () => {
    const { name, number, contacts } = this.state;

    const isExisting = contacts.some(contact => contact.name === name);
    if (isExisting) {
      alert("Name already exists");
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: ''
    }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  render() {
    return (
      <div>
        <h1>phoneBook</h1>
        
        <Book 
          name={this.state.name} 
          number={this.state.number} 
          onChange={this.handleChange}
        />

        <button onClick={this.addContact}>Add contact</button>

        <ul>
          {this.state.contacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
              <button onClick={() => this.deleteContact(id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}