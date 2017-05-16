import React from 'react'

class ResultsDetail extends React.Component {

  render(){
    return(
      <section>
        <li>{this.props.member} {this.props.time}</li>
      </section>
    )
  }

}

export default ResultsDetail