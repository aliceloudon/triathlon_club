import React from 'react'
import ReactDOM from 'react-dom'
import DashboardContainer from './containers/DashboardContainer'

window.onload = function(){
  ReactDOM.render(
    <DashboardContainer/>,
    document.getElementById('app')
  )
}
