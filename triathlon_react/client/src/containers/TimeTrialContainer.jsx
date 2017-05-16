import React from 'react'
import TimeTrial from '../components/TimeTrial'

class TimeTrialContainer extends React.Component {

  render(){
    const timeTrialNodes = this.props.timetrials.map((timetrial, index) => {
      return (
        <TimeTrial key={index} timetrial={timetrial} handleTimeTrialClick={this.props.handleTimeTrialClick} />
      )
    })

    return(
      <section >
        <ul className='time-trial-container' >
          {timeTrialNodes}        
        </ul>
      </section>
    )
  }

}

export default TimeTrialContainer