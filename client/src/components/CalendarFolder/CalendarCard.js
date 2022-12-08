import React from 'react'

const CalendarCard = ({calendar_id, summary, startime, endtime, timezone}) => {

  return (
    <div>
      <p>{summary}</p>
      <p>{startime}</p>
      <p>{endtime}</p>
    </div>
  )
}

export default CalendarCard