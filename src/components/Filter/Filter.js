import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contacts/contactsActions';
import s from './Filter.module.css';

function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <label className={s.label}>
      Find contact by name
      <br />
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={e => dispatch(filterContact(e.target.value))}
      />
    </label>
  );
}

export default Filter;
