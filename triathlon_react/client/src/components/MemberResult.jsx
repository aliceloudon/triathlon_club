import React from 'react'

class MemberResult extends React.Component {

  render(){
    return(
      <ul id='member-result-list'>
        <li>Date: {this.props.result.time_trial.date}</li>
        <li>{this.props.result.time_trial.title} {this.props.result.time_trial.distance} {this.props.result.time_trial.discipline}</li>
        <li>{this.props.result.time}</li>
      </ul>
    )
  }

}

export default MemberResult