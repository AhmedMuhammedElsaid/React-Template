import React from 'react';
import { AboutSection , CreativeInfo ,InfoTitle , InfoSpan , InfoDir , InfoDes ,Anchor} from './style.js'
const About = () => {
    
    return(

<AboutSection>
            <div class="container">
                <CreativeInfo>
                    <InfoTitle><InfoSpan>This is</InfoSpan> Me</InfoTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDes>
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor href="#">explicabo</Anchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDes>
                    <InfoDes>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDes>
                </CreativeInfo>
            </div>
        </AboutSection>
    )
}

export default About