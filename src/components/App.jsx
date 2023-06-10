import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Form from "./Form/Form";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state])

  return [state, setState];
}

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', [])

  const [filter, setFilter] = useState('');


  function formSubmitHandler(name, number) {
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    }

    setContacts(v => [...v, newContact]);
  };

  function handleFilterChange(e) {
    setFilter(e.currentTarget.value);
  };

  function deleteContact(contactId) {
    setContacts(contacts.filter(contact => contactId !== contact.id))
  };

  const filteredContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    })
  
  return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={handleFilterChange}/>
        <Contacts contacts={filteredContacts} handleDelete={deleteContact} />
      </div>
      
    );
};