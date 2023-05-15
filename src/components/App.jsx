import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  formSubmitHandler = data => {
    const repeatedName = this.state.contacts.find(
      contact => contact.name === data.name
    );

    const contact = {
      ...data,
      id: nanoid(),
    };
    
    (!repeatedName)
    ? this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }))
    : (alert(`${data.name} is already in contacts`));      
  };

  getFillteredNames = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filteredNames = this.getFillteredNames();

    return (
      <div className="container">
        <h1>Phonebook </h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contactArray={filteredNames}
          onDeleteClick={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
