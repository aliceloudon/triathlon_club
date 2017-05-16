import React from 'react'
import MemberDetail from '../components/MemberDetail'

class AthleteHistoryContainer extends React.Component {

  render(){
    return(
      <section>
        <ul className='member-list'>
          <MemberDetail member={this.props.memberDetails}/>
        </ul>
      </section>
    )
  }

}

export default AthleteHistoryContainer