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
                    <div>
                        <nav id="nav-wrap" className="dt w-100 mw8 center" style={{display: "block;"}}>

                            <div className="dtc v-mid tr pa3">
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

                        <div className="tc-l mt4 mt5-m mt6-l ph3">
                            <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">Hello, I'm <span style={{color: '#204051'}}>{name}</span></h1>
                            <h2 className="fw1 f3 white-80 mt3 mb4">{description}</h2>
                            <a className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3"
                               href={project}>Projects</a>
                            &emsp;
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