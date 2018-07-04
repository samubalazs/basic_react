
function userReducer(state, action) {
  switch (action.type) {
    case 'USER_DATA':
      return Object.assign({}, state, {
        user: action.payload
      })
    break;
    default:
      return state
  }
}

export default userReducer;
