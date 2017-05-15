import React from 'react'
import TimeTrial from './TimeTrial'

class TimeTrialList extends React.Component {

  handleClick(time_trial){
    this.props.handleTimeTrialClick(time_trial)
  }

  render(){
    const timeTrialNodes = this.props.timetrials.map((timetrial, index) => {
      return (
        <TimeTrial key={index} timetrial={timetrial} handleClick={this.handleClick.bind(this)} />
      )
    })

    return(
      <section >
        <ul className='time-trial-list' >
          {timeTrialNodes}        
        </ul>
      </section>
    )
  }

}

export default TimeTrialList