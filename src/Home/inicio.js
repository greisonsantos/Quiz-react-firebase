import React from 'react'
import {Container, Header, Segment,Card,Button} from 'semantic-ui-react'


import Navegacao from './Header'

const Inicio = props=>{
	return(
		<div>
         <Navegacao/>
		   <container>
		     <segment piled>
               <h1> Play Learning</h1>
             </segment>
                 <p> Jogue Aprendendo</p>
                  <br/>
                <p> Desafie seus amigos- Nesta incrivel Aventura</p>

             <Card fluid>
                <Card.Content>
                    Acessar
                </Card.Content>

                <Card.Content>
                         <Button basic color='blue'> Login Com Facebook </Button>
                         <Button basic color='green'> Usuário Administrador </Button>
                </Card.Content>
             </Card>

            </container>
	    </div>
	)
}

export default Inicio