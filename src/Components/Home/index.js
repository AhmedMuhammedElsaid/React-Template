import React from 'react';
import {HomeSec,HomeInformation,HomeInfo,HomeTitle,HomeDesc,HomeSpan,HomeBtn} from './style.js'
const Home = () => {

    return (
        <HomeSec>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>John Doe </HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDesc>
                        Iam a professional <HomeSpan>UX Designer</HomeSpan> and Front-End Developer creating modern and  designs to Web and Mobile. Let us work together. Thank you.
                    </HomeDesc>
                    <HomeBtn className="home-btn">Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSec>
    )
}

export default Home