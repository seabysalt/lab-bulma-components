import React, { Component } from 'react'
import CoolButton from './CoolButton'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io" >
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
    </a>

    <div className="navbar-start">
      <a className="navbar-item">
        Home
      </a>
    </div>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      {/* <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span> */}
    </a>
    <div className="buttons">
    <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
    <CoolButton isSmall isSuccess>Button 2</CoolButton>
    </div>
    
  </div>

</nav>
      </div>
    )
  }
}

export default Navbar;

