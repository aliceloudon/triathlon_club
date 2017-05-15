import React from 'react'

class Detail extends React.Component {

  render(){
    return(
      <div className='detail-display'>{this.props.details}</div>
    )
  }

}

export default Detail