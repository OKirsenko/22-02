import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { connect } from 'react-redux';
import { removeContact } from '../../redux/contacts/contactsActions';

function ContactsList({ contacts, removeContact }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
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
  contacts: state.contacts,
});

const mapDispatchToProps = {
  removeContact,
};

export default connect(mapStatetoProps, mapDispatchToProps)(ContactsList);
