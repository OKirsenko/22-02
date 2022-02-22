import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add');
export const removeContact = createAction('contacts/remove');
export const filterContact = createAction('contacts/filter');
