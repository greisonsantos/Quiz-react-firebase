import React, {Component} from 'react'
import {List,Container} from 'semantic-ui-react'

import Respostas from './Respostas'


const resposta={
   id:1,

}

class Resultado extends Component{
    render(){
    	return(
        <div>
              <h2> Seus Resultados </h2>
              <p> Confira seu desempenho nesta categoria</p>

           <Container>
              <List>
                 <Respostas/>
              </List>
            </Container>
         </div>
        )
    }


}

export default Resultado