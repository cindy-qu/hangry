import React, { useEffect, useState } from 'react'
import CalendarList from './CalendarList.js'

const ShowCalendar = ({ user }) => {
    const [user3, setUser3] = useState(null)
    const [updateAfterDelete, setUpdateAfterDelete] = useState(false)
  
    useEffect(() => {
      fetch("/me").then((res) => {
        if (res.ok) {
          res.json().then((userData) => {
            setUser3(userData)
          });
        }
      });
    }, [updateAfterDelete])

  return (
    <div>
        <h1>My Events</h1>
        <CalendarList
        setUpdateAfterDelete={setUpdateAfterDelete}
        calendars={user3?.calendars}
        />
    </div>
  )
}

export default ShowCalendar