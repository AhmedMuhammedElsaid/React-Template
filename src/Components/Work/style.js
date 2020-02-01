import styled from "styled-components";

export const WorkSection = styled.div `
    height: auto;
    padding: 50px 0;
    overflow: hidden;
    background: #95979a47
`

export const WorkTitle=styled.h2`
    font-size: 60px; 
    `

export  const WorkSpan=styled.span`
    font-weight: normal
`

export const WorkPartFirst=styled.div`
    margin-top: 20px;
    width: 30%;
    float: left;
    height: auto;
    padding: 100px 0;
    border: 1px solid #888;
    border-radius:20px;
    box-sizing: border-box;
    text-align: center;
    margin-left: 5%;
    margin-left:${props => props.first === 1  ? "0":"5%"}

`
export const Icon= styled.i`
    color: #888;
    margin-bottom: 20px;
`

export const  WorkPartTitle=styled.h4 `
    font-size: 25px;
    color: #eb5424;
    margin-bottom: 20px
`

export const WorkLine=styled.hr `
    width: 60%;
    margin: auto;
    margin-bottom: 20px
`

export const WorkPartDesc=styled.p`
    font-size: 18px;
    color: #333;
    padding:18px
`