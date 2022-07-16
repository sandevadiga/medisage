import React from 'react'
import shedules from '../../assets/shedule.jpg'
import './Shedule.css';

const Schedule = () => {
  return (
    <div>
       <img className='timetable' src={shedules} alt='match-schedule'/>
    </div>
  )
}

export default Schedule