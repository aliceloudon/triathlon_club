import React from 'react'

class Sidebar extends React.Component {

  render(){
    return(
      <section id='sidebar-textbox'>
        <p className='sidebar-text'>Members</p>
        <p className='sidebar-text'>Time Trials</p>
        <p className='sidebar-text'>Club Champs</p>
        <p className='sidebar-text'>Calendar</p>
        <p className='sidebar-text'>Training</p>
        <p className='sidebar-text'>Chat</p>
      </section>
    )
  }

}

export default Sidebar