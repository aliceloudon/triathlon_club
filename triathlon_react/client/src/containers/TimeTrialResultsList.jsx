import React from 'react'
import TimeTrialDetail from '../components/TimeTrialDetail'
import ResultsDetail from '../components/ResultsDetail'

class TimeTrialResultsList extends React.Component {

  render(){

    const timeTrialDetailNodes = this.props.timeTrialDetails.map((timeTrial, index) => {
      return (
        <TimeTrialDetail 
          key={index} 
          title={timeTrial.title} 
          date={timeTrial.date} 
          discipline={timeTrial.discipline} 
          distance={timeTrial.distance}
        />
      )
    })

    const resultsDetailNodes = this.props.resultsDetails.map((result, index) => {
      return (
        <ResultsDetail 
          key={index} 
          time={result.time} 
          member={result.member.name}
        />
      )
    })

    return(
      <section>
        <h4 className='titles'>Time Trial Results</h4>
          <div>{timeTrialDetailNodes}</div>
          <div>{resultsDetailNodes}</div>
      </section>
    )
  }

}

export default TimeTrialResultsList