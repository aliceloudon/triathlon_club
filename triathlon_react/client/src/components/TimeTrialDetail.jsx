import React from 'react'

class TimeTrialDetail extends React.Component {

  render(){
    return(
      <ul className='list'>
        <li className='list-element'>{this.props.title} {this.props.distance} {this.props.discipline}</li>
        <li className='list-element'>{this.props.date}</li>
      </ul>
    )
  }

}

export default TimeTrialDetail