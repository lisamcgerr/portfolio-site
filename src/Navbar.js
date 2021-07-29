import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class Navbar extends React.Component {

  render(){
    return (
      // <nav className="nav">
      //   <div className="container">
      //     <h1 className="logo">LISA MCGERR</h1>
      //     <ul>
      //         <li><a href="/about" className="active">ABOUT</a></li>
      //         <li><a href="/projects">PORTFOLIO</a></li>
      //         <li><a href="/skills">SKILLS</a></li>
      //         <li><a href="https://docs.google.com/document/d/1_9YDqVM7wcGTC1GzjV8YC4-rnPHrKyu1xgePjK8s-pE/edit?usp=sharing">RESUME</a></li>
      //     </ul>
      //   </div>
      // </nav>

      // <nav className='nav'>  
      //   <div className='container'>
      //     <h1 className='logo'>LISA MCGERR</h1>
      //       <ul>
      //         <li></li>

      //       </ul>
     
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
      </Menu>
    </div>
    )
  }
}

export default Navbar
