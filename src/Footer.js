import React from 'react'
import { Container, Divider } from 'semantic-ui-react'


class Footer extends React.Component {

  render(){
    return (
      <div> 
        <Container textAlign='justified'>
            <Divider />
            <p>
            © Lisa McGerr 2021  (github link) (linkedin link)
            </p>
        </Container>
      </div>
    )
  }
}

export default Footer
