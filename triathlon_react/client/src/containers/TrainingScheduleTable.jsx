import React from 'react'

class TrainingScheduleTable extends React.Component {

  render(){
    return(
      <table>
        <caption>Training Schedule</caption>
        <thead>
          <tr>
            <th scope="col">DAY</th>
            <th scope="col">Swim</th>
            <th scope="col">Run</th>
            <th scope="col">Bike</th>
          </tr>
        </thead>
        <tr>
          <td>MON</td>
          <td>19:30-20:30: Commonwealth Pool</td>
          <td>18:15-19:15: Meet at Commonwealth Pool</td>
        </tr>
        <tr>
          <td>TUE</td>
        </tr>
        <tr>
          <td>WED</td>
        </tr>
        <tr>
          <td>THUR</td>
        </tr>
        <tr>
          <td>FRI</td>
        </tr>
        <tr>
          <td>SAT</td>
        </tr>
        <tr>
          <td>SUN</td>
        </tr>
      </table>
    )
  }

}

export default TrainingScheduleTable