import React from 'react';
import { Link  } from 'react-router-dom';
import  {Nav,NavbarLogo,NavbarText,NavList ,ListItem,Anchor}  from './style.js'


const Navbar = () => {
    const styleInLine={textDecoration: 'none', color: 'black',padding:' 10px 15px',color:"#333",fontWeight:'bold'}
    return(
        <Nav>
            
        <div className="container">
            
            <NavbarLogo>
                <NavbarText>Logo</NavbarText>
            </NavbarLogo>
      
            <NavList>
                <ListItem><Anchor   href="#">Home</Anchor></ListItem>
                <ListItem><Anchor href="#">Work</Anchor></ListItem>
                <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
                <ListItem><Anchor href="#">Blog</Anchor></ListItem>
                <ListItem><Anchor href="#">About</Anchor></ListItem>
                <ListItem><Anchor  href="#">Contact</Anchor></ListItem>
            </NavList> 
            
        </div>
        
    </Nav>
    )
}

export default Navbar