import React from 'react'
import TimeTrial from './TimeTrial'

class TimeTrialList extends React.Component {


  render(){
    const timeTrialNodes = this.props.timetrials.map((timetrial, index) => {
      return (
        <TimeTrial key={index} title={timetrial.title} date={timetrial.date} discipline={timetrial.discipline} distance={timetrial.distance} />
      )
    })

    return(
      <section>
        <ul className='time-trial-list'>
          {timeTrialNodes}        
        </ul>
      </section>
    )
  }

}

export default TimeTrialList