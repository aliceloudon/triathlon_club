import React from 'react'
import MemberList from '../containers/MemberList'
import MemberForm from '../components/MemberForm'
import TimeTrialList from '../containers/TimeTrialList'
import TimeTrialResultsList from './TimeTrialResultsList'
import MemberResultsList from './MemberResultsList'
import TrainingScheduleTable from './TrainingScheduleTable'
import AjaxRequest from '../services/AjaxRequest'

class DashboardContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      members: [],
      timetrials: [],
      results: [],
      timeTrialDetails: [],
      resultsDetails: [],
      memberDetails: [],
      memberResults: []
    }
  }

  fetchData(url){
    const req = new AjaxRequest()
    req.get(url, (err, data, status) => {
      if (err) {throw err}
      if (status === 200){
        switch (url) {
          case 'http://localhost:5000/api/members':
            this.setState({
              members: data
            })
          case 'http://localhost:5000/api/time_trials':
            this.setState({
              timetrials: data
            })
          case 'http://localhost:5000/api/results':
            this.setState({
              results: data
            })
        }
      }
    })
  }

  componentDidMount(){
    this.fetchData('http://localhost:5000/api/members')
    this.fetchData('http://localhost:5000/api/time_trials')
    this.fetchData('http://localhost:5000/api/results')
  }

  handleTimeTrialClick(timeTrial){
    const newDetailsArray = []
    const newResultsArray = []
    newDetailsArray.push(timeTrial)

    this.state.results.forEach((result) => {
      if (result.time_trial.id === timeTrial.id){
        newResultsArray.push(result)
      }
    })

    this.setState((prevState) => ({
      timeTrialDetails: newDetailsArray,
      resultsDetails: newResultsArray
    }))
  }

  handleMemberClick(member){
    const newMemberResults = []

    this.setState((prevState) => ({
      memberDetails: member
    }))

    this.state.results.forEach((result) => {
      if (result.member.id === member.id) {
        newMemberResults.push(result)
      }
    })

    this.setState((prevState) => ({
      memberResults: newMemberResults
    }))
  }

  render(){
    return(
      <section>
        <section className='main-container'>

          <section className='secondary-container'>
            <MemberList 
              members={this.state.members}
              handleMemberClick={this.handleMemberClick.bind(this)}
            />
          </section>

          <section className='secondary-container'>
            <MemberResultsList memberResults={this.state.memberResults} member={this.state.memberDetails}/>
          </section>

          <section className='secondary-container'>
            <TimeTrialResultsList 
              timeTrialDetails={this.state.timeTrialDetails} 
              resultsDetails={this.state.resultsDetails}
              memberDetails={this.state.memberDetails}
            />
          </section>
          
          <section className='secondary-container'>
            <TimeTrialList 
              timetrials={this.state.timetrials} 
              handleTimeTrialClick={this.handleTimeTrialClick.bind(this)}
            />
          </section>

          <section className='secondary-container'>
            <MemberForm />  
          </section>
        </section>

        <section className='training-schedule'>
          <TrainingScheduleTable />
        </section>

      </section>
    )
  }

}

export default DashboardContainer