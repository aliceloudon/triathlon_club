import React from 'react'

class Detail extends React.Component {

  render(){
    return(
      <li>{this.props.member}: {this.props.time}</li>
    )
  }

}

export default Detail