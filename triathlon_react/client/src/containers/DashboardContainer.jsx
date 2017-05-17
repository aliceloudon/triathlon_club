import React from 'react'
import MemberList from '../containers/MemberList'
import MemberForm from '../components/MemberForm'
import TimeTrialList from '../containers/TimeTrialList'
import TimeTrialResultsList from './TimeTrialResultsList'
import MemberResultsList from './MemberResultsList'
import TrainingScheduleTable from './TrainingScheduleTable'
import AjaxRequest from '../services/AjaxRequest'
import Sidebar from './Sidebar'

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

  fetchMemberData(url){
    const req = new AjaxRequest()
    req.get(url, (err, data, status) => {
      if (err) {throw err}
      if (status === 200){
        this.setState({members: data})
      }
    })
  }

  changeDatetimeToDate(timeTrialData){
    timeTrialData.forEach((timeTrial) => {
      timeTrial.date = timeTrial.date.substring(0, 10)
    })
  }

  fetchTimeTrialData(url){
    const req = new AjaxRequest()
    req.get(url, (err, data, status) => {
      this.changeDatetimeToDate(data)
      if (err) {throw err}
      if (status === 200){
        this.setState({timetrials: data})
      }
    })
  }

  changeTimeToMinutesSeconds(resultsData){
    resultsData.forEach((result) => {
      const minutes = Math.floor(result.time/60)
      const seconds = result.time - minutes * 60

      function str_pad_left(string,pad,length) {
        return (new Array(length+1).join(pad)+string).slice(-length)
      }
      var finalTime = str_pad_left(minutes,'0',2)+':'+str_pad_left(seconds,'0',2)
      result.time = finalTime

      result.time_trial.date = result.time_trial.date.substring(0, 10)
    })
  }

  fetchResultData(url){
    const req = new AjaxRequest()
    req.get(url, (err, data, status) => {
      this.changeTimeToMinutesSeconds(data)
      if (err) {throw err}
      if (status === 200){
        this.setState({results: data})
      }
    })
  }

  componentDidMount(){
    this.fetchMemberData('http://localhost:5000/api/members')
    this.fetchTimeTrialData('http://localhost:5000/api/time_trials')
    this.fetchResultData('http://localhost:5000/api/results')
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
      <section className='main-container'>
      
        <section className='sidebar'>
          <Sidebar />
        </section>

        <section className='content-container'>

          <section className='members-container'>
            <MemberList 
              members={this.state.members}
              handleMemberClick={this.handleMemberClick.bind(this)}
            />
          </section>

          <section className='timetrials-container'>
            <TimeTrialList 
              timetrials={this.state.timetrials} 
              handleTimeTrialClick={this.handleTimeTrialClick.bind(this)}
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
          
        </section>

      </section>

    )
  }

}

export default DashboardContainer