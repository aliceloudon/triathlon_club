import React from 'react'
import Member from '../components/Member'

class MemberContainer extends React.Component {

  render(){
    const memberNodes = this.props.members.map((member, index) => {
      return (
        <Member key={index} name={member.name}/>
      )
    })

    return(
      <section>
        <ul className='member-list'>
          {memberNodes}        
        </ul>
      </section>
    )
  }

}

export default MemberContainer