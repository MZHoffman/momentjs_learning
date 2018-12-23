import React, { Component } from 'react'
import './App.css'
import moment from 'moment'

class App extends Component {
  render() {
    function timestampToTime(timestamp) {
      let date = new Date(timestamp * 1000)
      console.log(date)

      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()
      let hours = '0' + date.getHours()
      let minutes = '0' + date.getMinutes()
      let formattedTime =
        year +
        '-' +
        month +
        '-' +
        day +
        ' ' +
        hours.substr(-2) +
        ':' +
        minutes.substr(-2)
      return formattedTime
    }
    function timestampToTimeUTC(timestamp) {
      let date = new Date(timestamp * 1000)
      console.log(new Date(timestamp * 1000))
      let year = date.getUTCFullYear()
      let month = date.getUTCMonth() + 1
      let day = date.getUTCDate()
      let hours = '0' + date.getUTCHours()
      let minutes = '0' + date.getUTCMinutes()
      let formattedTime =
        year +
        '-' +
        month +
        '-' +
        day +
        ' ' +
        hours.substr(-2) +
        ':' +
        minutes.substr(-2)
      return formattedTime
    }
    const timestamp = 3966000

    const currentTime = moment().format('HH:mm:ss')
    const day = moment.unix(timestamp)
    const dayJS = timestampToTime(timestamp)
    const dayUTCJS = timestampToTimeUTC(timestamp)
    const time = moment('12:30', 'h:mm').format('HH:mm')
    const time2 = moment(time, 'hmm').format('HH:mm')

    const start = '11:01'
    const end = '12:00'
    const result = moment(end, 'hmm').diff(moment(start, 'hmm'))
    console.log(moment(end, 'hmm').format('HH:mm'))
    console.log(time2)
    console.log(time)

    return (
      <div className='App'>
        <div style={{ float: 'right' }}>
          The Current Time according to moment
          is...........................................: {currentTime}
        </div>
        <div style={{ float: 'right' }}>
          The date and time representing timestamp: {timestamp} accorting to
          moment is: {day.format('YYYY-M-D HH:mm')}
        </div>
        <div style={{ float: 'right' }}>
          The date and time representing timestamp: {timestamp} accorting to
          moment with .utc() method is: {day.utc().format('YYYY-M-D HH:mm')}
        </div>
        <div style={{ float: 'right' }}>
          The date and time representing timestamp: {timestamp} accorting to JS
          <code>new Date()</code> is: {dayJS}
        </div>
        <div style={{ float: 'right' }}>
          The date and time representing timestamp: {timestamp} accorting to JS
          <code>new Date()</code> in UTC is: {dayUTCJS}
        </div>
        <div style={{ float: 'right' }}>
          The Current Time plus 1 hour
          is........................................: {time}
        </div>
        <div style={{ float: 'right' }}>
          The Current Time plus 1 hour
          is........................................: {time2}
        </div>
      </div>
    )
  }
}

export default App
