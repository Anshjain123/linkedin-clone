import { Avatar } from '@mui/material'
import React from 'react'
import './SideBar.css'
const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">

                <img className="sidebar__backgroundimage" src="https://static-exp2.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq" alt="" />
                <Avatar src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" className="sidebar__avatar" />
                <div className="name">
                    Ansh Jain
                </div>
                <div className="mail">
                    PEC CSE 2024 || PEC ACM CSS Student chapter Member || 4⭐ Codechef || pupil at Codeforces || Web developer || App Developer
                </div>

                <div className="sidebar__stats">
                    <div className="sidebar__stat">
                        <p style={{ margin: '0' }}>Who's viewed your profile</p>
                        <div className="sidebar__statNumber">
                            2500
                        </div>
                    </div>
                    <div className="sidebar__stat">
                        <p style={{ margin: '0' }}>Impressions of your post</p>
                        <div style={{ margin: '0' }} className="sidebar__statNumber">
                            3707
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SideBar