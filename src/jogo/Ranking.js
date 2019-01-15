import React, {Component} from 'react'

import {List,Container} from 'semantic-ui-react'

import Usuario from './Usuario'

class Ranking extends Component{
    render(){
    	return(
        <div>
              <h2> RANKING</h2>
              <p> Quem é o mestre</p>

           <Container>
                <List >
                    <Usuario foto='' nome='greison' pontos='100'/>
                    <Usuario foto='' nome='xena' pontos='85'/>
                    <Usuario foto='' nome='anonimo' pontos='50'/>
                </List>

            </Container>
         </div>
        )
    }


}

export default Ranking