import React, {Component} from 'react'
import {Grid, Radio, Button, Message} from 'semantic-ui-react'



const Perguntas = props =>{
    return(
         <div>
             <h2> Perguntas sobre Funções</h2>
             <p> texto lorem ipsum</p>
             <h3> Pergunta bla bla bla </h3>
            <Grid columns={2} divided>
                <Grid.Row>
                  <Grid.Column>
                         <Message>
                          <p>  ALternativa 1 </p>
                         </Message>
                          <Radio toggle />
                  </Grid.Column>

                  <Grid.Column>
                          <Message>
                          <p>  ALternativa 2 </p>
                         </Message>
                           <Radio toggle />
                  </Grid.Column>

                </Grid.Row>

                <Grid.Row>
                  <Grid.Column>
                          <Message>
                          <p>  ALternativa 3 </p>
                         </Message>
                          <Radio toggle/>
                  </Grid.Column>

                  <Grid.Column>
                           <Message>
                          <p>  ALternativa 4 </p>
                         </Message>
                           <Radio toggle/>
                  </Grid.Column>

                </Grid.Row>

            </Grid>
            <Button>Finalizar </Button>
         </div>
    )

}

export default Perguntas