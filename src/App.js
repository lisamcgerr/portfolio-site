import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import ProjectContainer from './ProjectContainer'
import { Image } from 'semantic-ui-react'

class App extends React.Component {

  render(){
    return (
      <div>
        <Navbar />
        <Image className='cooking-image' src='https://user-images.githubusercontent.com/73184313/119396283-48f60400-bc9a-11eb-8be4-47b0565885de.jpg' width='100%' paddingTop='10' />
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/projects' component={ProjectContainer} />
          <Route exact path='/' component={Home} />
        </Switch>   
        This is the app component
        <About />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App
