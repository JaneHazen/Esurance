const URL_ROOT = 'http://localhost:3000'

export function getQuestions(keywords){

  const request = fetch(`${URL_ROOT}/questionsIndex?q=${keywords}`, {method:'GET'})
  .then(response => response.json())

  return {
    type: 'SEARCH_QUESTIONS',
    payload:request
  }

}

export function questionDetail(id){
  const request = fetch(`${URL_ROOT}/questionsIndex?id=${id}`, {method:'GET'})
  .then(response => response.json())

  return {
    type: 'QUESTION_DETAIL',
    payload: request
  }
}

export function clearDetail(id){
  return {
    type:'CLEAR_DETAIL',
    payload: []
  }
}