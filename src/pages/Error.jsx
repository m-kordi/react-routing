import React from 'react'
import img1 from '../assets/error.gif'

function Error() {
    let errorstyle={
        width:"400px",
        height:"400px",
        margin:"40px"
        
    }
  return (
    <img style={errorstyle} src={img1} alt="#" />
  )
}

export default Error