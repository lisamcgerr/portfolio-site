import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class Navbar extends React.Component {

  render(){
    return (
      <div>  
        <Menu className='navbar' secondary >
            <Menu.Item
              name='Lisa McGerr'/>
          <Link to="/about">
            <Menu.Item
              name='About'/>
          </Link>
          <Link to="/projects">
            <Menu.Item
              name='Portfolio'/>
          </Link>
          <Link to="/contact">
            <Menu.Item
              name='Contact'/>
          </Link>
        </Menu>
      </div>
    )
  }
}

export default Navbar
