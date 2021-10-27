const initialState = {
  likes: 0,
  text: '',
  darkMode: false,
  thangs: []
}


  // action -> {type: "SOME_KIND_OF_ACTION", payload: {}}
  // reducer({type: "LIKE"}) => increment my likes by 1
  // reducer({type: "FORM_CHANGE", payload: target}) => 'a'

  // a reducer will take an ACTION that has a TYPE and a PAYLOAD (optional)
    // the TYPE will determine what the reducer does to state
    // the PAYLOAD will carry any information that the function needs in order to change state
    // Eventually: The job of the reducer will be specifically to just take in an old state object, and return a new state object
export const reducer = (state=initialState, action) => {
  switch (action.type){
    case "LIKE":
      return ({...state, likes: state.likes + 1})
    case "DISLIKE":
      return ({...state, likes: state.likes - 1})
    case "TOGGLE":
      return ({...state, darkMode: !state.darkMode })
    case "FORM_CHANGE":
      return ({...state, [action.payload.name]: action.payload.value })
    case "SUBMIT":
      return ({
        ...state,
        text: '',
        thangs: [state.text, ...state.thangs]
      })
    default:
      return {...state};
  }
}
