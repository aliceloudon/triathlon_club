import React from 'react'
import moment from 'moment'
import BigCalendar from 'react-big-calendar'
import AjaxRequest from '../services/AjaxRequest'
import Calendar from '../services/Calendar'

BigCalendar.momentLocalizer(moment)

require('style!css!react-big-calendar/lib/css/react-big-calendar.css')


class CalendarContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      events: []
    }
  }

  getEvents(callback){
    const req = new AjaxRequest()
    const cal = new Calendar()
    const url = cal.getURL()

    req.get(url, (err, data, status) => {
      if (err) {throw err}
      if (status === 200){
        const events = []
          data.items.map((event) => {
            events.push({
              start: event.start.date || event.start.dateTime,
              end: event.end.date || event.end.dateTime,
              title: event.summary,
            })
          })
          callback(events)
      }
    })
  }

  componentDidMount(){
    this.getEvents(function(events){
      this.setState({events: events})
    }.bind(this))
  }

  render(){
    // console.log(this.state.events)
    return(

      <section id='calendar-container'>
        <BigCalendar
          style={{height: '420px'}}
          events={this.state.events}
        />
      </section>
    )
  }

}

export default CalendarContainer