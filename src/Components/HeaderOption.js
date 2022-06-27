import { Avatar } from '@mui/material'
import React from 'react'
import './HeaderOption.css'


const HeaderOption = ({ avatar, Icon, title }) => {
   
      
    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOption__icon"/>}
            {avatar && <Avatar src ={avatar} className="headerOption__icon" style = {{height:'27px', width:'27px'}} />}
            <div className="headerOption__title">
                {title}
            </div>

        </div>
    )
}

export default HeaderOption