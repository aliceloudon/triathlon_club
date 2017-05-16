import React from 'react'

class Detail extends React.Component {

  render(){
    return(
      <ul className='detail-list'>
        <li>{this.props.title}</li>
        <li>{this.props.date}</li>
        <li>{this.props.discipline}</li>
        <li>{this.props.distance}</li>
        <li>{this.props.member_id}: {this.props.time}</li>
      </ul>
    )
  }

}

export default Detail