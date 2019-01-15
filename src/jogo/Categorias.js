import React, {Component} from 'react'
import {Grid, Segment, Header, Icon} from 'semantic-ui-react'


const tamanho ={

	width:175,
	heigth: 175
}

class Categorias extends Component{
    render(){
    	return(
          <div>
             <h2> Categorias </h2>
             <p>Selecione a Categoria que deseja responder </p>

             <Grid columns={3}>
               <Grid.Row>
                     <Grid.Column>
                       <Segment circular style={tamanho}>
                         <Header as='h2'>
                          Variaveis
                            <Header.Subheader>
                              <Icon name= 'code'/>
                            </Header.Subheader>
                            </Header>
                       </Segment>
                     </Grid.Column>
                        <Segment circular style={tamanho}>
                         <Header as='h2'>
                          Laços
                            <Header.Subheader>
                              <Icon name= 'code'/>
                            </Header.Subheader>
                            </Header>
                       </Segment>

                     <Grid.Column>
                        <Segment circular style={tamanho}>
                         <Header as='h2'>
                          Funções
                            <Header.Subheader>
                              <Icon name= 'code'/>
                            </Header.Subheader>
                            </Header>
                       </Segment>

                     </Grid.Column>

               </Grid.Row>

             </Grid>
    	  </div>
    	)
    }

}


export default Categorias