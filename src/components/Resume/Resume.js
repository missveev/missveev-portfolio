import React, { Component } from 'react';
import './Resume.css';

class Resume extends Component {
    getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
        if (this.props.data) {
            var skillmessage = this.props.data.skillmessage;
            var education = this.props.data.education.map(function(education){
                return <div key={education.school}><h2>{education.school}</h2>
                    <p ><em>{education.degree}</em> <span>&bull;</span><em >{education.graduated}</em></p>
                    <p>{education.description}</p></div>
            })
            var work = this.props.data.work.map(function(work){
                return <div key={work.company}><h2>{work.company}</h2>
                    <p >{work.title}<span>&bull;</span> <em >{work.years}</em></p>
                    <p>{work.description}</p>
                </div>
            })
            var skills= this.props.data.skills.map((skills) => {
                let className = 'bar-expand ' + skills.name.toLowerCase();
                return (
                    <li key={skills.name}>
                        <span style={{width: skills.level, backgroundColor: this.getRandomColor()}}
                              className={className}></span><em>{skills.name}</em>
                    </li>
                )
            })
        }
        return (
            <section id='resume'>
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>EDUCATION</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                {education}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row work">

                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                {work}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row skill">

                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h4>{skillmessage}</h4>
                            </div>
                        </div>
                        <div className="bars">
                            <ul className="skills">
                                {skills}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Resume;