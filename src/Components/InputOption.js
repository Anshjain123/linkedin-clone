import React from 'react'
import './InputOption.css'


const InputOption = ({Icon, title,color}) => {
  return (
    <div className="inputoption">
        <Icon className = "inputOption__icon" style = {{color:color}} />
        <div className="inputoption__title" style = {{color:'#8b8b8b'}}>
            {title}
        </div>
    </div>
  )
}

export default InputOption