import React, { Component } from 'react'

// components
import Subhead from './language_subheading'
import Search from '../containers/search'
import ListOfQuestions from '../containers/list_of_questions'

class App extends Component{
  render(){
    return(
        <div className="App">
          <Search/>
          <Subhead/>
          <ListOfQuestions/>
        </div>
      )
  }

}

export default App;