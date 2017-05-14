import React from 'react'
import MemberList from '../components/MemberList'

class DashboardContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      members: [{name:'Alice'}, {name:'Emily'}]
    }
  }

  render(){
    return(
      <div>
        <h1>Edinburgh Triathletes</h1>
        <MemberList members={this.state.members}/>
      </div>
    )
  }

}

export default DashboardContainer