import React from 'react'
import CalendarCard from './CalendarCard.js'

const CalendarList = ( {setUpdateAfterDelete, calendars}) => {

    const renderCalendarCard = calendars?.map((calendar) => {
        return (
            <CalendarCard
            key={calendar.id}
            calendar_id={calendar.id}
            summary={calendar.summary}
            startime={calendar.startime}
            endtime={calendar.endtime}
            timezone={calendar.timezone}
            />
        )
    })

  return (
    <div>
        {renderCalendarCard}
    </div>
  )
}

export default CalendarList