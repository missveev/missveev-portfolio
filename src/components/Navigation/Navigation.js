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

            <header id="home" className="sans-serif">
                <div className="cover bg-left bg-center-l">

                        <nav id="nav-wrap" className="dt w-100 mw8 center" >

                            <div className="nav">
                                <a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
                                   href="#home">HOME</a>
                                <a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
                                   href="#about">ABOUT</a>
                                <a className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3"
                                   href="#resume">RESUME</a>
                                <a className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3"
                                   href="#portfolio">PORTFOLIO</a>
                                <a className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3"
                                   href="#contact">CONTACT</a>
                            </div>

                        </nav>
                        <div className="row banner">
                        <div className="banner-text">
                            <h1 >Hello, I'm <span style={{color: '#204051'}}>{name}</span></h1>
                            <h3 >{description}</h3>
                            <div className="socials">
                            <a className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3"
                               href={project}>Projects</a>
                            &emsp;
                            <a className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3"
                               href={github}>Github</a>
                        </div>
                        </div>
                        </div>

                </div>
            </header>
        );
    }
}
export default Navigation;