import React, {Component} from 'react';
import veev from './veev.jpg';
import './About.css';

class About extends Component {
    render() {
        if (this.props.data) {
            var bio = this.props.data.bio;

        }
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src={veev} alt="Nordic Giant Profile Pic"
                             style={{width: '150px', height: '150px'}}/>
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>{bio}</p>
                    </div>
                </div>

            </section>
        );
    }
}

export default About;