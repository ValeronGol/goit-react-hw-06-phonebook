// import React, { useEffect, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import { addContact, deleteContact, filterContact } from "redux/actions";
import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { Conteiner } from "./App.styled";

export default function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');
  // const localstorageKeyName = 'contacts';

  // useEffect(() => {
  //   const contacts = localStorage.getItem(localstorageKeyName);
  //   const parseContacts = JSON.parse(contacts);
  //   parseContacts && setContacts(parseContacts);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(localstorageKeyName, JSON.stringify(contacts));
  // }, [contacts]);

  const formSubmit = ({ name, number }) => {
    // setContacts((prevContacts) => {
    //   const newContact = {
    //     id: `${uuidv4()}`,
    //     name,
    //     number,
    //   };
    const duplicateContact = contacts.find((contact) => {
      return contact.name === name;
    });
    if (duplicateContact) {
      alert(`${name} вже є у телефонній книзі!!!`);
      return [...contacts];
    } else {
      return dispatch(addContact(name, number));
    }
  };

  const onDelete = (contactId) => {
    return dispatch(deleteContact(contactId));
  };

  const setFilterToState = (filterData) => {
    return dispatch(filterContact(`${filterData}`));
  };

  const onFilter = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterContacts = onFilter();

  return (
    <Conteiner>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmit} />
      <h1>Contacts</h1>
      <Filter setFilterToState={setFilterToState} />
      <ContactList contacts={filterContacts} onDelete={onDelete} />
    </Conteiner>
  );
}
