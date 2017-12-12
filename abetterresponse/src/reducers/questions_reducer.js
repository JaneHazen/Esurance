const state = {
  list:[]
}

export default function (state= {}, action){

  switch(action.type){
    case 'SEARCH_QUESTIONS':
      return {...state, list:action.payload, detail:[]}
    case 'QUESTION_DETAIL':
      return {...state, detail:action.payload}
    case 'CLEAR_DETAIL':
      return {...state, detail:action.payload}
    default:
      return state
  }

}