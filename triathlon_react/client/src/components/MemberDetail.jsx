import React from 'react'

class MemberDetail extends React.Component {

  render(){
    return(
      <section>
        <li>{this.props.member.name}</li>
      </section>
    )
  }

}

export default MemberDetail