import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { connect } from 'react-redux';
import { removeContact } from '../../redux/contacts/contactsActions';

function ContactsList({ contacts, removeContact, filter }) {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          {name} : {number}
          <button className={s.button} onClick={() => removeContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
ContactsList.propTypes = {
  contacts: PropTypes.array,
  removeContact: PropTypes.func.isRequired,
};

const mapStatetoProps = state => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispatchToProps = {
  removeContact,
};

export default connect(mapStatetoProps, mapDispatchToProps)(ContactsList);
