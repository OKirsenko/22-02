const contactsReducer = (state = [], { type, payload }) => {
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

export default contactsReducer;
