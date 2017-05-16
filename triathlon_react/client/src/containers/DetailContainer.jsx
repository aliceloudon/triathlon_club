import React from 'react'
import Detail from '../components/Detail'

class DetailContainer extends React.Component {

  render(){

    const timeTrialDetailNodes = this.props.timeTrialDetails.map((timeTrial, index) => {
      return (
        <Detail key={index} title={timeTrial.title} date={timeTrial.date} discipline={timeTrial.discipline} distance={timeTrial.distance}/>
      )
    })

    const resultsDetailNodes = this.props.resultsDetails.map((result, index) => {
      return (
        <Detail key={index} time={result.time} member={result.member_id}/>
      )
    })

    return(
      <section className='detail-display'>
        {timeTrialDetailNodes}
        {resultsDetailNodes}
      </section>
    )
  }

}

export default DetailContainer