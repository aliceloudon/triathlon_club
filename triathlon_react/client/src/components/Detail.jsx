import React from 'react'

class Detail extends React.Component {

  render(){
    console.log(this.props.title)
    return(
      <div>{this.props.title}</div>
    )
  }

}

export default Detail