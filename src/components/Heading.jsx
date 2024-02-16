import React from 'react'

const Heading = (props) => {
  return (
    <div className='container pt-4 text-center'>
      <h2 className='spHeading fw-bold'>{props.heading}</h2>
      <p>{props.tagline}</p>
    </div>
  )
}

export default Heading
