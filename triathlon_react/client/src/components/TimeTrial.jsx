import React from 'react'

class TimeTrial extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      date: '',
      discipline: '',
      distance: ''
    }
  }

  handleClick(){
    this.setState({date: this.props.date})
    this.setState({discipline: this.props.discipline})
    this.setState({distance: this.props.distance})
  }

  render(){
    return(
      <li onClick={this.handleClick.bind(this)}> 
        {this.props.title} 
        {this.state.date}
        {this.state.discipline}
        {this.state.distance}
      </li>
    )
  }

}

export default TimeTrial