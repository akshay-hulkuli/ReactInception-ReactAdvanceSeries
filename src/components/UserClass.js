import React from 'react'

class UserClass extends React.Component {
  constructor (props) {
    /*
        This parent constructor call is significant because -> 
            1. This initialise the parent component properly.
            2. Without this call, we don't get to access props like `this.props`.
            3. We know that component rerenders when props changes. If we don't initialise parent, then
                react component won't track props.
    */
    super(props)

    this.state = {
      userData: {}
    }
    // console.log("child constructor " + this.props.name)
  }

  async componentDidMount () {
    // console.log("child component did mount " + this.props.name)
    const data = await fetch('https://api.github.com/users/akshay-hulkuli')
    const json = await data.json()
    console.log(json)
    this.setState({ userData: json })
  }

  /**
   * This is equivalent to ->
   *  useEffect(() => {
   *      console.log("user data is changed")
   *  }, [userData])
   *
   * in functional components
   */
  componentDidUpdate (prevProps, prevState) {
    if (this.state.userData !== prevState.userData) {
      console.log('user data is changed')
    }
  }

  render () {
    const { name, location, avatar_url } = this.state.userData
    // console.log("child render " +  this.props.name)
    return (
      <div className='user-card'>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: 6361695398</h4>
        <img src={avatar_url} />
      </div>
    )
  }
}

export default UserClass
