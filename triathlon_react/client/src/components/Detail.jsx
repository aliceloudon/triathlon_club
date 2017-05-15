import React from 'react'

class Detail extends React.Component {

  render(){
    return(
      <ul>
        <li>{this.props.details}</li>
      </ul>
    )
  }

}

export default Detail