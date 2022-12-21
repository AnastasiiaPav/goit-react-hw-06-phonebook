import { useSelector } from 'react-redux';

import { Form } from './FormApp';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filterVal = useSelector(state => state.filter.value);


  // const filterInput = event => {
  //   dispatch(filter(event.target.value));
  // };

  const onFilterSearch = () => {
    const normalizedFilter = filterVal.toLowerCase();
    if (contacts !== []) {
      const filtContact = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
      return filtContact;
    }
  };

  // const deleteUser = userId => {
  //   dispatch(remove(userId));
  // };

  // const dataFormSubmit = ({ ...data }) => {
  //   const searchName = contacts.map(contact => contact.name);
  //   const searchNumber = contacts.map(contact => contact.number);

  //   if (searchName.includes(data.name)) {
  //     alert(`${data.name} уже есть в Вашем списке контактов`);
  //     return
  //   }
  //   if (searchNumber.includes(data.number)) {
  //     alert(`В Вашем списке контактов уже есть номер ${data.number}`);
  //     return
  //   }
  //   dispatch(add(data));
  // };

  return (
    <div>
      <h1>Phonebook</h1>
      <Form  />
      <h2>Contacts</h2>
      <Filter  value={filterVal} />
      <ContactList listsContact={onFilterSearch()}  />
    </div>
  );
};
