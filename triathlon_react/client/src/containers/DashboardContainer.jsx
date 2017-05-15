import React from 'react'
import MemberList from '../components/MemberList'

class DashboardContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      members: []
    }
  }

  componentDidMount(){
    var url = 'http://localhost:5000/api/members'
    var request = new XMLHttpRequest()
    request.open('GET', url)

    // request.setRequestHeader('Content-Type', "application/json")
    // request.withCredentials = true

    request.onload = () => {
      if (request.status === 200){
        // console.log("request: ", request.responseText)
        var data = JSON.parse(request.responseText)
        this.setState({members: data})
      }
      // else {
      //   console.log("Error has occured.")
      // }
    }
    request.send()
  }

  render(){
    return(
      <div>
        <h1>Edinburgh Triathletes</h1>
        <MemberList members={this.state.members}/>
      </div>
    )
  }

}

export default DashboardContainer