import { combineReducers } from 'redux';
const contactsArr = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const itemsReducer = (state = contactsArr, { type, payload }) => {
  switch (type) {
    case 'contacts/add':
      return [...state, payload];
    case 'contacts/remove':
      //   console.log(state);
      return state.filter(el => el.id !== payload);

    default:
      return state;
  }
};
const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case 'contacts/filter':
      return payload;
    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
export default contactsReducer;
