import React from 'react'

class MemberResult extends React.Component {

  render(){
    return(
      <section>
        <li>{this.props.result.time}</li>
      </section>
    )
  }

}

export default MemberResult