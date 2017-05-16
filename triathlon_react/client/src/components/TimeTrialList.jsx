import React from 'react'
import TimeTrial from './TimeTrial'

class TimeTrialList extends React.Component {

  // handleClick(timeTrial){
  //   this.props.handleTimeTrialClick(timeTrial)
  // }

  render(){
    const timeTrialNodes = this.props.timetrials.map((timetrial, index) => {
      return (
        <TimeTrial key={index} timetrial={timetrial} handleTimeTrialClick={this.props.handleTimeTrialClick} />
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