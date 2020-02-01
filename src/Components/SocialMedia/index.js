import React , {useState , useEffect} from 'react';
import {SocialSection,Social,SocialDesc,Icon,Span,SpanInfo} from './style.js'
import Axios from 'axios';
const SocialMedia = () => {
    const [media , setMedia]=useState([])

    useEffect(()=>{
        Axios.get('data.json').then(res => setMedia(res.data.social))
    },[])
    const socialItem=media.map((mediaItem) => {
        return(
            <Social id={mediaItem.id} key={mediaItem.id}>
            <Icon className={mediaItem.icon}></Icon>
            <SocialDesc>
                <Span >{mediaItem.title}</Span>
                <SpanInfo>{mediaItem.body}</SpanInfo>
            </SocialDesc>
        </Social>
        )
    })
    return(
        <SocialSection>
            
        {socialItem}
        
    </SocialSection>
    )
}

export default SocialMedia