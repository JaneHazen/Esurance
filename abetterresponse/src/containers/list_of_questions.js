import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ListOfQuestions extends Component {

  listOfQuestions = ({list}) =>{
    if(list){
      return list.map((question)=>{
        return(
          <Link key={question.id} to={`/question/${question.id}`} className="each_question">
            <div className="language">
              {question.Language}
            </div>
            <div className="question_text">
              {question.Question}
            </div>
          </Link>

          )
      })
    }
  }
  render(){
    return(
        <div>
          {this.listOfQuestions(this.props.questions)}
        </div>
      )
  }
}

function mapStateToProps(state){
  return{
    questions:state.questions
  }
}

export default connect(mapStateToProps, null)(ListOfQuestions);