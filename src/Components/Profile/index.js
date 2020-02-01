import React  from 'react';
import {ProfileSection,ProfileSec,PorfileList,ProfileItem,ItemSpan,WebSpan,SkillsSection,Parent,ParentSpan,SkillDesc,BarTitle,BarPerc,BarSection} from './style.js'
const Profile = () => {

    return (
        <ProfileSection>
        <div class="container">
            <ProfileSec>
                <h2 class="profile-title"><span>My </span>Profile</h2>
                <PorfileList>
                    <ProfileItem>
                        <ItemSpan>Name</ItemSpan>
                        John Doe
                    </ProfileItem>
                    <ProfileItem>
                        <ItemSpan>Birthday</ItemSpan>
                        1/1/1970
                    </ProfileItem>
                    <ProfileItem>
                        <ItemSpan>Address</ItemSpan>
                       Mars
                    </ProfileItem>
                    <ProfileItem>
                        <ItemSpan>Phone</ItemSpan>
                        4444 5555 6666
                    </ProfileItem>
                    <ProfileItem>
                        <ItemSpan>Email</ItemSpan>
                        JohnDoe@doe.com
                    </ProfileItem>
                    <ProfileItem>
                        <ItemSpan>Website</ItemSpan>
                        <WebSpan class="web">www.google.com</WebSpan>
                    </ProfileItem>
                </PorfileList>
            </ProfileSec>
            
            <SkillsSection>
                <h2 class="skills-title">Some <span>skills</span></h2>
                <SkillDesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                </SkillDesc>
                
                <BarSection>
                    <BarTitle>JavaScript</BarTitle>
                    <BarPerc>95%</BarPerc>
                    <Parent>
                        <ParentSpan id="1"> </ParentSpan>
                    </Parent>
                </BarSection>
                <BarSection>
                    <BarTitle>React Js</BarTitle>
                    <BarPerc>90%</BarPerc>
                    <Parent>
                        <ParentSpan ></ParentSpan>
                    </Parent>
                </BarSection>
                
                <BarSection>
                    <BarTitle>Redux </BarTitle>
                    <BarPerc>90%</BarPerc>
                    <Parent>
                        <ParentSpan class="sp3"></ParentSpan>
                    </Parent>
                </BarSection>
            </SkillsSection>
            
        </div>
    </ProfileSection>
    )
}

export default Profile;
