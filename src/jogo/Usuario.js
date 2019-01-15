import React, {Component} from 'react'
import {List,Image} from 'semantic-ui-react'


const Usuario= props=>{
   return(
        <List.Item>

                 <Image avatar src={props.foto}/>
                  {props.foto}
                   <List.Content floated='right'> {props.foto} pontos </List.Content>
        </List.Item>
   )

}


export default Usuario