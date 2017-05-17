import React from 'react'

class MemberResult extends React.Component {

  render(){
    return(
      <ul className='list'>
        <li className='list-element'>{this.props.result.time_trial.title} {this.props.result.time_trial.distance} {this.props.result.time_trial.discipline}</li>
        <li className='list-element'>Date: {this.props.result.time_trial.date}</li>
        <li className='list-element'>Time: {this.props.result.time}</li>
      </ul>
    )
  }

}

export default MemberResult