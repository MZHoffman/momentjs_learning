import React, { Component } from 'react'
import './App.css'
import moment, { duration } from 'moment'
import { Well } from 'react-bootstrap'
import { format } from 'url'

class App extends Component {
  timeToms = time => {
    let h = moment(time, 'h:mm').hour()
    let m = moment(time, 'h:mm').minute()
    return duration({ h: h, m: m }).asMilliseconds()
  }
  render() {
    const timestamp = moment().unix() //note to myself, dont forget about leap years and time change
    console.log(timestamp)
    console.log(duration(timestamp, 'milliseconds').hours())
    console.log(duration(timestamp, 'milliseconds').minutes())
    console.log(moment('123', 'hmm').format('HH:mm'))
    console.log(moment('123', 'hmm').hour())
    this.timeToms('12:30')
    console.log(this.timeToms('12:30'))
    return (
      <div>
        <Well>The Current Time is </Well>
        <Well>The Current Time plus 1 hour is </Well>
      </div>
    )
  }
}

export default App
