import React  from 'react';
import { HashLink } from 'react-router-hash-link';
import "./Header.css"
import { Menu, Container, Icon, Image, } from 'semantic-ui-react';



export default function Header(){

    return (

        <>  
        <Menu fixed='top' inverted style={{ backgroundColor: 'black' }} id='navbar'>
            <Container textAlign='left'>
              
             
            <Menu.Item  header id="NavMains">
                 <Image size='small' src='https://i.imgur.com/VMzyiqd.png' position='left'/>
            </Menu.Item>
            

            <HashLink smooth to="#about"> 
            <Menu.Item  style={{ marginTop: '1em'}}>
                About
            </Menu.Item>
            </HashLink> 

            <HashLink smooth to="#projects"> 
            <Menu.Item style={{ marginTop: '1em'}}>
                Projects
            </Menu.Item>
            </HashLink>

            <HashLink smooth to="#tech">
            <Menu.Item style={{ marginTop: '1em'}} className="NavMains" >
                Tech
            </Menu.Item>
            </HashLink>
            
            <Menu.Item href="https://www.linkedin.com/in/parsachowdhury10/" position="right" className="NavIcons">
                <Icon name="linkedin" aria-label="linkedIn" size="large"></Icon>
            </Menu.Item>
            <Menu.Item href="https://github.com/parsachow" className="NavIcons">
                <Icon name="github square" aria-label="GitHub" size="large"></Icon>
            </Menu.Item>
            

            </Container>

        </Menu>
    
</>

    )
}

