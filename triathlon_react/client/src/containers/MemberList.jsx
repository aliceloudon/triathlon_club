import React from 'react'
import Member from '../components/Member'

class MemberList extends React.Component {

  render(){
    const memberNodes = this.props.members.map((member, index) => {
      return (
        <Member 
          key={index} 
          member={member}
          handleMemberClick={this.props.handleMemberClick}
        />
      )
    })

    return(
      <section>
        <h4 className='titles'>Members</h4>
        <ul className='list'>
          {memberNodes}        
        </ul>
      </section>
    )
  }

}

export default MemberList