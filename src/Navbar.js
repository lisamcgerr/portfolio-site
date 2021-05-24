import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class Navbar extends React.Component {

  render(){
    return (
      <div>  
        <Menu size='large' className='navbar' secondary >
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
          <Link to="/contact">
            <Menu.Item
              name='Contact'
              position='right'/>
          </Link>
        </Menu>
      </div>
    )
  }
}

export default Navbar
