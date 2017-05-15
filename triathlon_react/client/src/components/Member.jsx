import React from 'react'

class Member extends React.Component {

  render(){
    return(
      <li>{this.props.name}</li>
    )
  }

}

export default Member