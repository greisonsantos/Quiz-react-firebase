import React, { Component } from 'react';

import {Link} from 'react-router-dom'
import {Menu,Image} from 'semantic-ui-react'

const Header= props=>{
   return(
        <Menu>
            <Menu.Item as={Link} to='/'> Home </Menu.Item>
            <Menu.Item as={Link} to='/categorias'> Categorias </Menu.Item>
            <Menu.Item as={Link} to='/perguntas'> Perguntas </Menu.Item>
            <Menu.Item as={Link} to='/resultado'> Resultados </Menu.Item>
            <Menu.Item as={Link}to='/Ranking'> Ranking </Menu.Item>

            <Menu.Menu position='right'>
               <Menu.Item><Image avatar src=''/>Greison </Menu.Item>
            </Menu.Menu>
        </Menu>
    )

}


export default Header