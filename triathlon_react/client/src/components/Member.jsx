import React from 'react'

class Member extends React.Component {

  handleClick(event){
    this.props.handleMemberClick(this.props.member)
  }

  render(){
    return(
      <li onClick={this.handleClick.bind(this)} className='clickable-list-element'>{this.props.member.name}</li>
    )
  }

}

export default Member