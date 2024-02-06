import { Component } from 'react'
import User from './User'
import UserClass from './UserClass'

class About extends Component {

  /**
   * React has 2 phases in rendering.
   * Render Phase -> 1. where constructor() and render() is called. This is a pure phase and has no side effects. May be paused, aborted or restarted by React.
   *                 2. Here only virtual DOM get updated, Reconciliation is done upon calling render(). This phase is really fast
   * Commit phase -> 1. componentDidMount is called, this is not pure and can have side effects
   *                 2. Here actual DOM updation happens. then componentDidMount() is called, again Reconciliation and DOM update might happen due to side effects
   */

  constructor(props) {
    super(props)
    console.log("parent Constructor");
  }

  componentDidMount() {
    console.log("parent component did mount")
  }

  render () {
    console.log("parent render")
    return (
      <div>
        <h1>This is the about page of the Food Panda App</h1>
        {/* <User /> */}
        <UserClass name={'akshay'} location={'Hulkuli'} />
      </div>
    )
  }
}

export default About
