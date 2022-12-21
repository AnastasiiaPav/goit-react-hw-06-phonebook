import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { remove } from 'Redux/contaSlise';


export const ContactList = ({ listsContact }) => {

  const dispatch = useDispatch();

  const deleteUser = userId => {
    dispatch(remove(userId));
  };

  return (
    <ul>
      {listsContact.map(contact => (
        <li key={contact.number} >
          {' '}
          <p>{contact.name}</p> <p>{contact.number}</p>{' '}
          <button type="button" onClick={() =>( deleteUser(contact.number))} > Delete</button>{' '}
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes ={
  listsContact: propTypes.array,
  onDelete: propTypes.func,
  contact: propTypes.object,
}