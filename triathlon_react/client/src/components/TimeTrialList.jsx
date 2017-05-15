import React from 'react'
import TimeTrial from './TimeTrial'

class TimeTrialList extends React.Component {

  handleClick(event){
    this.props.handleTimeTrialClick(this.props.timetrials[event.target.value])
  }

  render(){
    const timeTrialNodes = this.props.timetrials.map((timetrial, index) => {
      return (
        <TimeTrial key={index} title={timetrial.title} date={timetrial.date} discipline={timetrial.discipline} distance={timetrial.distance} />
      )
    })

    return(
      <section>
        <ul className='time-trial-list' onClick={this.handleClick.bind(this)}>
          {timeTrialNodes}        
        </ul>
      </section>
    )
  }

}

export default TimeTrialList