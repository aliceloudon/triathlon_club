import React from 'react'
import MemberList from '../components/MemberList'
import MemberForm from '../components/MemberForm'
import TimeTrialList from '../components/TimeTrialList'

class DashboardContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      members: [],
      timetrials: []
    }
  }

  componentDidMount(){
    var url = 'http://localhost:5000/api/members'
    var request = new XMLHttpRequest()
    request.open('GET', url)

    request.onload = () => {
      if (request.status === 200){
        var data = JSON.parse(request.responseText)
        this.setState({members: data})
      }
    }
    request.send()
  }

  render(){
    return(
      <section>
        <h1>Edinburgh Triathletes</h1>

        <article>
          <MemberList members={this.state.members}/>  
        </article>
        
        <article>
          <MemberForm />  
        </article>
        
        <article>
          <TimeTrialList timetrials={this.state.timetrials}/>
        </article>

      </section>
    )
  }

}

export default DashboardContainer