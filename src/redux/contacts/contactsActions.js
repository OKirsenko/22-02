export const addContact = contact => ({
  type: 'contacts/add',
  payload: contact,
});

export const removeContact = id => {
  //   console.log(id);
  return {
    type: 'contacts/remove',
    payload: id,
  };
};
