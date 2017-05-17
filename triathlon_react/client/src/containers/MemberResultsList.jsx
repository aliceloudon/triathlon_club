import React from 'react'
import MemberResult from '../components/MemberResult'

class MemberResultsList extends React.Component {

  render(){
    const memberResultNodes = this.props.memberResults.map((result, index) => {
      return (
        <MemberResult key={index} result={result} />
      )
    })

    return(
      <section>
        <h4 className='titles'>Individual Results</h4>
        <h4 className='secondary-titles'>{this.props.member.name}</h4>
        <div>
          {memberResultNodes}
        </div>
      </section>
    )
  }

}

export default MemberResultsList