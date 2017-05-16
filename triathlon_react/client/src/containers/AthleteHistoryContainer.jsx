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
        <ul className='member-list'>
          {memberResultNodes}
        </ul>
      </section>
    )
  }

}

export default AthleteHistoryContainer