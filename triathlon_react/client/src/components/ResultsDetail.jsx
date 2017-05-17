import React from 'react'

class ResultsDetail extends React.Component {

  render(){
    return(
      <ul className='list-condensed'>
        <li className='list-element'>{this.props.member} {this.props.time}</li>
      </ul>
    )
  }

}

export default ResultsDetail