import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Rightbar = () => {

  const newsarticles = (heading, subtitle) => {
    
    return (<div className="widgets__articles">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon style = {{height:'10px', width:'10px', marginRight:'10px'}} />
      </div>
      <div className="widgets__articleRight">
        <div className="widgets__heading">
          {heading}
        </div>
        <div className="widgets__subtitle">
          {subtitle}
        </div>
      </div>
    </div>)
  }


  return (
    <div className="widgets">
      <div className="widgets__header">
        <div className="linkedin__news">
          LinkedIn News
        </div>
        <div className="info__icn">
          <InfoIcon />
        </div>
      </div>
      {newsarticles("Inflation cuts clothing down to size", "34m ago")}
      {newsarticles("New pet paw-licies at India Inc", "40m ago")}
      {newsarticles("CEO salaries see a spike", "3d ago")}
      {newsarticles("Hybrid work is here to stay", "2d ago")}
      {newsarticles("Fresh funds for India's startups", "6h ago")}
      {newsarticles("Blue collar jobs see record demand", "3d ago")}
      {newsarticles("Govt clarifies on 1% TDS on cryptos", "4d ago")}
      {newsarticles("More time for new fathers in India", "6d ago")}
      {newsarticles("Questions to ask in a job interview", "2d ago")}
      {newsarticles("Gen Z's influence on office designs", "5d ago")}

    </div>
  )
}

export default Rightbar