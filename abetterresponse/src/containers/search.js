import React, {Component} from 'react';
import { connect} from 'react-redux';
import { getQuestions} from '../actions';
import { bindActionCreators } from 'redux';

class Search extends Component {
    constructor(props){
      super(props);

      this.state = {
        keyword:''
      }

    }

    searchQuestions = (event) => {
      event.preventDefault();
      this.props.getQuestions(this.state.keyword)
    }

    handleChange = (event) => {
      this.setState({
        keyword:event.target.value
      })
    }

    componentDidMount(){
      console.log(this.state)
    }

  render(){


    return(
      <div className="search">
        <form onSubmit={this.searchQuestions}>
          Search by Language: <input type="text" value={this.state.keyword} onChange={this.handleChange}/>
        </form>
      </div>
      )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getQuestions}, dispatch)
}

export default connect(null, mapDispatchToProps)(Search);