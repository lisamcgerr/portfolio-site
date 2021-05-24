import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import ProjectContainer from './ProjectContainer'

class App extends React.Component {

  render(){
    return (
      <div>
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/projects' component={ProjectContainer} />
          <Route exact path='/' component={Home} />
        </Switch>   
        <Navbar />
        <Home />
        This is the app component
        <About />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App
