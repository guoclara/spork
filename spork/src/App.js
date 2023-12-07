import './App.css';
import { useState } from 'react';
import Scheduler from './components/Scheduler';
import data from './data/data';

const defaultBuffer = 1

function getUpcomingDate(bufferWindow) {
  const currDate = new Date()
  const currYear = currDate.getFullYear()
  const dates = []
  const timeUntil = []

  for (const date of data.dates) {
    var dateStr = `${date.day}, ${currYear} ${date.time}`
    const timeDiff = new Date(dateStr).getTime() - currDate.getTime()
    const daysDiff = (timeDiff) / (1000 * 60 * 60 * 24)

    // if the date is in the past, update the year to next year
    // give a one day buffer so we actually hit a date rather than update it to early
    if (daysDiff < 0) {
      if (daysDiff < -bufferWindow) {
        dateStr = `${date.day}, ${currYear+1} ${date.time}`
        dates.push(dateStr)
        timeUntil.push(new Date(dateStr).getTime() - currDate.getTime())
      } else {
        return dateStr
      }
    } else {
      dates.push(dateStr)
      timeUntil.push(timeDiff)
    }
  }
  return dates[timeUntil.indexOf(Math.min(...timeUntil))]
}

function App() {
  const [date, setDate] = useState(getUpcomingDate(defaultBuffer));

  return (
    <div className="App">
      
      <Scheduler 
        targetDate={date} 
        themes={data.themes} 
        days={30} 
        getUpcomingDate={getUpcomingDate} 
        setDate={setDate} 
      />
    </div>
  );
}

export default App;
