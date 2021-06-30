import React from 'react'
import {Grid }from 'semantic-ui-react'

class Resume extends React.Component{
    render(){
        return(
            <div textAlign='center'>
                <Grid container textAlign='center' style={{ height: '120vh' }} verticalAlign='top' >  
                    {/* <br></br>
                    <br></br>
                        <embed src='https://docs.google.com/document/d/1_9YDqVM7wcGTC1GzjV8YC4-rnPHrKyu1xgePjK8s-pE/export?format=pdf' width='100%'  height='1px'/>
                    <img textAlign='center' width="800px" height="100%" alt="Lisa McGerr's Resume" src="https://user-images.githubusercontent.com/73184313/124001355-27272580-d99a-11eb-842e-9ccb361f5f1a.png"></img> */}
                </Grid>
            </div>
        )
    }
}

export default Resume