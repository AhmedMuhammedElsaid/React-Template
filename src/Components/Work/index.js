import React, { Component } from 'react';
import { WorkSection, WorkPartFirst, Icon, WorkPartTitle, WorkLine, WorkPartDesc } from './style.js'
import Axios from 'axios';

class Work extends Component {
    state = {
        works: []
    }
    componentDidMount() {
        Axios.get('data.json').then(res => { this.setState({ works: res.data.works }) })
    }
    render() {
        const { works } = this.state;
        const workList = works.map(work => {
            return (
                <WorkPartFirst first={work.id} key={work.id}>
                    <Icon className={work.icon_name}></Icon>
                    <WorkPartTitle>{work.title}</WorkPartTitle>
                    <WorkLine />
                    <WorkPartDesc>
                        {work.body}
                    </WorkPartDesc>
                </WorkPartFirst>
            )
        })
        return (

            <WorkSection>
                <div className="container">
                    {workList}
                </div>
            </WorkSection>

        )
    }
}

export default Work