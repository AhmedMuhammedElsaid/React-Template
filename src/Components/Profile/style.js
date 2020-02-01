import styled from "styled-components";

export const ProfileSection=styled.div`
    padding: 50px 0;
    overflow: hidden;
    background:#eee;
`
export const ProfileSec=styled.div`
    width: 50%;
    float: left;
`

export const PorfileList=styled.ul`
    list-style: none
`

export const ProfileItem=styled.li`
    margin-bottom: 8px
`

export const ItemSpan=styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold
`
export const WebSpan=styled.a`
    font-weight: normal;
    font-size:18px;
    color: #eb5424
`

export const SkillsSection=styled.div`
    width: 50%;
    float: left;
`

export const SkillDesc=styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`

export const BarSection=styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`

export const BarTitle=styled.span`
    float: left;
`

export const BarPerc=styled.span`
    float: right;
    margin-right: 100px
`

export const Parent=styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`

export const ParentSpan=styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width:${props => props.id==="1"?"90%":"85%" };
  
`

// .profile_skills .skills .bar .parent span.sp1 {
//     width: 90%;
// }

// .profile_skills .skills .bar .parent span.sp2 {
//     width: 95%;
// }

// .profile_skills .skills .bar .parent span.sp3 {
//     width: 85%;
// }

// .profile_skills .profile .profile-title,
// .profile_skills .skills .skills-title{
//     font-size: 40px; 
//     margin-bottom: 20px
// }

// .profile_skills .profile .profile-title span,
// .profile_skills .skills .skills-title span{
//     font-weight: normal;
// }