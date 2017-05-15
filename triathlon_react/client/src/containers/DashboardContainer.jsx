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
    var member_url = 'http://localhost:5000/api/members'
    var member_request = new XMLHttpRequest()
    member_request.open('GET', member_url)

    member_request.onload = () => {
      if (member_request.status === 200){
        var data = JSON.parse(member_request.responseText)
        this.setState({members: data})
      }
    }
    member_request.send()

    var time_trial_url = 'http://localhost:5000/api/time_trials'
    var time_trial_request = new XMLHttpRequest()
    time_trial_request.open('GET', time_trial_url)

    time_trial_request.onload = () => {
      if (time_trial_request.status === 200){
        var data = JSON.parse(time_trial_request.responseText)
        this.setState({timetrials: data})
      }
    }
    time_trial_request.send()
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