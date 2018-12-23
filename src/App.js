import React, { Component } from 'react'
import './App.css'
import moment from 'moment'
import { Well } from 'react-bootstrap'

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

    const timestamp = moment().unix()

    const currentTime = moment().format('HH:mm:ss')
    const day = moment.unix(timestamp)
    const dayJS = timestampToTime(timestamp)
    const dayUTCJS = timestampToTimeUTC(timestamp)
    const time = moment('12:30', 'h:mm').format('HH:mm')
    const time2 = moment(time, 'h:mm').format('HH:mm')
    const start = '11:01'
    const end = '12:00'
    const result = moment(
      moment(end, 'h:mm').diff(moment(start, 'h:mm')),
      'x'
    ).format()

    let plusone = moment()
      .add(1, 'h')
      .format()
    console.log(moment(end, 'h:mm').format('HH:mm'))
    console.log(time2)
    console.log(time)
    console.log(result)

    return (
      <div>
        <Well>The Current Time according to moment is {currentTime}</Well>
        <Well>The Current Date according to moment is {moment().format()}</Well>
        <Well>
          The Current Date plus 1 hour according to moment is
          {plusone}
        </Well>
        <Well>
          The Current TimaStamp according to moment is {moment().unix()}
        </Well>
        <Well>
          The date and time representing timestamp: {timestamp} accorting to
          moment is: {day.format('YYYY-M-D HH:mm')}
        </Well>
        <Well>
          The date and time representing timestamp: {timestamp} accorting to
          moment with .utc() method is: {day.utc().format('YYYY-M-D HH:mm')}
        </Well>
        <Well>
          The date and time representing timestamp: {timestamp} accorting to JS
          <pre>new Date()</pre> is: {dayJS}
        </Well>
        <Well>
          The date and time representing timestamp: {timestamp} accorting to JS
          <pre>new Date()</pre> in UTC is: {dayUTCJS}
        </Well>
        <Well>The Current Time is {time}</Well>
        <Well>The Current Time plus 1 hour is {time2}</Well>
      </div>
    )
  }
}

export default App
