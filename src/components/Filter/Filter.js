import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterContact } from 'redux/contacts/contactsActions';
import s from './Filter.module.css';

function Filter({ filter, filterContact }) {
  return (
    <label className={s.label}>
      Find contact by name
      <br />
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={e => filterContact(e.target.value)}
      />
    </label>
  );
}

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = {
  filterContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
