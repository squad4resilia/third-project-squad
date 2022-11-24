import React from 'react'
import Moto from "../FullPageLoader/Moto.gif";
import "../FullPageLoader/Loading.css"

const FullPageLoader = () => {
  return (
    <div className="fp-container">
        <img src={Moto} className="fp-loader" alt="loading" /> 
    </div>
  )
}

export default FullPageLoader