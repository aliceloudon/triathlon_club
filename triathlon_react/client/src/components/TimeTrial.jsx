import React from 'react'

class TimeTrial extends React.Component {

  constructor(props){
    super(props)
  }

  handleClick(event){
    this.props.handleTimeTrialClick(this.props.timetrial)
  }

  render(){
    return(
      <li className='clickable-list-element' onClick={this.handleClick.bind(this)}>{this.props.timetrial.title}</li>
    )
  }

}

export default TimeTrial