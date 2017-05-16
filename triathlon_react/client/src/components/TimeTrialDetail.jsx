import React from 'react'

class TimeTrialDetail extends React.Component {

  render(){
    return(
      <section>
        <li>{this.props.title}</li>
        <li>{this.props.date}</li>
        <li>{this.props.discipline}</li>
        <li>{this.props.distance}</li>
      </section>
    )
  }

}

export default TimeTrialDetail