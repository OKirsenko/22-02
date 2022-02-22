import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { addContact, filterContact, removeContact } from './contactsActions';
import { contactsArr } from 'contactsArr';
const itemsReducer = createReducer(contactsArr, {
  [addContact]: (state, { payload }) => {
    return [...state, payload];
  },
  [removeContact]: (state, { payload }) => {
    return state.filter(el => el.id !== payload);
  },
});

const filterReducer = createReducer('', {
  [filterContact]: (state, { payload }) => {
    return payload;
  },
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
export default contactsReducer;
