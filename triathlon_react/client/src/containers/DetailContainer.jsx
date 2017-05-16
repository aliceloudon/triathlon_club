import React from 'react'
import Detail from '../components/Detail'

class DetailContainer extends React.Component {

  render(){

    const detailNodes = this.props.details.map((detail, index) => {
      return (
        <Detail key={index} title={detail.title} date={detail.date} discipline={detail.discipline} distance={detail.distance}/>
      )
    })

    return(
      <section className='detail-display'>
        {detailNodes}
      </section>
    )
  }

}

export default DetailContainer