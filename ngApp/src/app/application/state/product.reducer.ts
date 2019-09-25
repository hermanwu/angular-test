export function reducer(state, action) {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case 'SHOW_APP':
      return {
        ...state,
        apps: action.payload,
      };

    default:
      return state;
  }
}
