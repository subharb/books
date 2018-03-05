//State solo corresponde al state del reducer no de la aplicacion
export default function(state = null, action){
  switch (action.type) {
    case "BOOK_SELECTED":
      return action.payload
      break;
    default:

  }

  return state;
}
