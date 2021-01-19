import React, {Component}  from 'react';
import './Navigation.css';
import '../MediaQuery.css';

class Navigation extends Component {
    render() {


        if (this.props.data) {
            var project = this.props.data.project;
            var github = this.props.data.github;
            var name = this.props.data.name;
            var description = this.props.data.description;
        }
        return (

            <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                    <ul id="nav" className="nav">
                            <li ><a className="smoothscroll" href="#home">Home</a></li>
                            <li><a className="smoothscroll" href="#about">About</a></li>
                            <li><a className="smoothscroll" href="#resume">Resume</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                            <li><a className="smoothscroll" href="#contact">Contact</a></li>
                        </ul>
                    </nav>

                    <div className="row banner">

                        <div className="banner-text">
                            <h1>Hello, I'm <span style={{color: '#204051'}}>{name}</span></h1>
                            <h3>{description}.</h3>
                            <hr/>
                            <div className="social">
                                <a className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3"
                                   href={project}>Projects</a> &emsp;
                                <a className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3"
                                   href={github}>Github</a>
                            </div>
                        </div>
                    </div>
            </header>
        );
    }
}
export default Navigation;