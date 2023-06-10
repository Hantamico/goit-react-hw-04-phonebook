import React, { Component } from "react";
import { nanoid } from "nanoid";

import { Form } from "./Form/Form";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";

class App extends Component{
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter:'',
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    } 
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  formSubmitHandler = ({ name, number }) => {
    if (this.state.contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    console.log({ name, number });
    
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    }

    this.setState({contacts: [...this.state.contacts, newContact]})
  };

  deleteContact = (contactId) => {
    console.log(contactId)
    this.setState({contacts: this.state.contacts.filter(contact => contactId !== contact.id)})
  };

  handleFilterChange = evt => {
    this.setState({filter: evt.target.value});
  };



  render() {
    const contacts = this.state.contacts;
    
    const filteredContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(this.state.filter.toLowerCase());
    })

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.handleFilterChange}/>
        <Contacts contacts={filteredContacts} handleDelete={this.deleteContact} />
      </div>
      
    );
  };
}

export default App;
