import styled from 'styled-components'

export const ContactSection = styled.div`
    padding: 50px 0;
    text-align: center;
    background:#95979a47
`

export const ContactTitle = styled.h2`
    font-size: 60px;
    margin-bottom: 30px
`

export const Span = styled.span`
    font-weight: normal
`

export const Form = styled.form`
    width: 70%;
    margin: auto;
`

export const Input = styled.input`
    box-sizing: border-box;
    outline: 0;
    padding: 10px;
    margin-bottom: 10px
`

export const FormInput = styled.div`
width:100%;
    overflow: hidden
`
export const InputText = styled(Input)`
    float: left;
    width: 48%;
`
export const InputEmail = styled(Input)`
    float: right;
    width: 48%;
    margin:0 6px
`

export const InputExp = styled.input`
    width: 97%;
    box-sizing: border-box;
    outline: 0;
    padding: 10px;
    margin: 10px 0 
 `
export const TextArea = styled.textarea`
    width: 97%;
    outline: 0;
    background: #eee;
    font-size:19px
`

export const InputSubmit = styled.input`
    box-sizing: border-box;
    outline: 0;
    padding: 10px;
    margin: 10px;
    width: 60%;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer
`