import React from 'react'
import Member from '../components/Member'

class MemberContainer extends React.Component {

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
        <h4>Current Members</h4>
        <ul className='member-list'>
          {memberNodes}        
        </ul>
      </section>
    )
  }

}

export default MemberContainer