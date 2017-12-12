import React,{Component} from 'react';
import {connect} from 'react-redux';
import {questionDetail, clearDetail} from '../actions';
import {bindActionCreators} from 'redux';

class Question extends Component {

  componentWillMount(){
    this.props.questionDetail(this.props.match.params.id)
  }

  componentWillUnmount(){
    this.props.clearDetail();
  }

  renderDetail = ({detail}) => {
    if(detail){
      return detail.map((question) => {
        return (
            <div key={question.id} className="question_detail">
              <div className="detailed_question">
                {question.Question}
              </div>
              <div className="detailed_answer">
                {question.Answer}
              </div>
            </div>
          )
      })
    }
  }

  render(){
    return(
        <div>
          {this.renderDetail(this.props.questions)}
        </div>
      )
  }
}

function mapStateToProps(state){
  return{
    questions:state.questions
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({questionDetail, clearDetail},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)