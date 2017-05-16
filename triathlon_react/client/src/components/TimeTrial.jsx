import React from 'react'

class TimeTrial extends React.Component {

  constructor(props){
    super(props)
  }

  handleClick(event){
    // console.log(this.props.timetrial)
    this.props.handleTimeTrialClick(this.props.timetrial)
  }

  render(){
    return(
      <li onClick={this.handleClick.bind(this)}>{this.props.timetrial.title}</li>
    )
  }

}

export default TimeTrial