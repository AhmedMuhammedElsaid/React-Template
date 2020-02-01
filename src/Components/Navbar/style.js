import styled from "styled-components";
// import {Link} from 'react-router-dom'

export const Nav =styled.div`
    padding: 10px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000;
    background:#ccc;
`

export const NavbarLogo = styled.div `
    width: 50%;
    float: left;
`

export const  NavbarText = styled.h2`
    font-size: 28px;
    font-weight: bold
`

export const NavList = styled.ul`
    width: 50%;
    float: left;
    list-style: none;
    padding: 0;
    margin-top:20px;
    font-size:25px
`

export const ListItem= styled.li` 
    display: inline-block;
`

export const Anchor = styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    &:hover{
        color: #eb5424
    }
    
`
export const Link=styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    &:hover{
        color: #eb5424
    }
    
`
