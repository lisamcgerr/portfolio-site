import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class Navbar extends React.Component {

  render(){
    return (
      <div className='navbar-container'>  
        <Menu size='large' className='navbar-container' secondary >
            <Menu.Item
              name='Lisa McGerr'
              position='left'/>
          <Link to="/about">
            <Menu.Item
              name='About'
              position='right'/>
          </Link>
          <Link to="/projects">
            <Menu.Item
              name='Portfolio'
              position='right'/>
          </Link>
          <Link to="/skills">
            <Menu.Item
              name='Skills'
              position='right'/>
          </Link>
          <a href="https://docs.google.com/document/d/e/2PACX-1vQoUXXOMIQf3hYoovgzMzDLdvsxd8_U94aQ62RQVLU0lp2Kclis0Ph1BOfON1-reBNyLe4j0xdNozJd/pub" target='blank'>
            <Menu.Item
              name='Resume'
              position='right'/>
          </a>
          {/* <Link to="/contact">
            <Menu.Item
              name='Contact'
              position='right'/>
          </Link> */}
        </Menu>
      </div>
    )
  }
}

export default Navbar
