import React from 'react'
import Member from './Member'

class MemberList extends React.Component {

  render(){
    const memberNodes = this.props.members.map((member, index) => {
      return (
        <Member key={index} name={member.name}/>
      )
    })

    return(
      <div>
        {memberNodes}        
      </div>
    )
  }

}

export default MemberList