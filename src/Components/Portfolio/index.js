import React, { useState, useEffect } from 'react';
import { PortfolioSection, PorTitle, Span, ProList, PortItem, ImgWrapper, Image, Overlay, OverLaySpan } from './style.js'
import Axios from 'axios';


const Portfolio = () => {

    const [images, setImages] = useState([])

    useEffect ( ()  =>  {

        Axios.get('data.json').then( res => { setImages(res.data.portfolio) }  )  
    } , [])

    const portfolioItems = images.map( (imageItem) => {

        return (
 
            <ImgWrapper key={imageItem.id} >
                <Image src={imageItem.image} alt="" />
                <Overlay>
                    <OverLaySpan>
                   Show Me
                </OverLaySpan>
                </Overlay>
            </ImgWrapper>

        )
    })

    return (
        <PortfolioSection>
            <PorTitle><Span>My</Span> Portfolio</PorTitle>
            <ProList>
                <PortItem active>All</PortItem>
                <PortItem>React</PortItem>
                <PortItem>Redux</PortItem>
                <PortItem>JavaScript</PortItem>
                <PortItem>Mobile</PortItem>
            </ProList>

            <div className="box">
        {portfolioItems}

            </div>
        </PortfolioSection>

    )

}
export default Portfolio