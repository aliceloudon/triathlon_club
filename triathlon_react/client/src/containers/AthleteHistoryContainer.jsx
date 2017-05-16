import React from 'react'
import MemberResult from '../components/MemberResult'

class AthleteHistoryContainer extends React.Component {

  render(){
    const memberResultNodes = this.props.memberResults.map((result, index) => {
      return (
        <MemberResult key={index} result={result} />
      )
    })

    return(
      <section>
        <h4>Individual Results</h4>
        <h4>{this.props.member.name}</h4>
        <ul className='member-list'>
          {memberResultNodes}
        </ul>
      </section>
    )
  }

}

export default AthleteHistoryContainer