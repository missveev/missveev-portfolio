import React, { Component } from 'react';
import './Footer.css';
class Footer extends Component {
    render() {
        return (
            <footer className="bg-near-black white-80 pv5 pv6-l ph4">
                <p className="f6"><span className="dib mr4 mr5-ns">©{(new Date().getFullYear())} LazyWeirdVeevDev.</span>
                    <a className="link white-80 hover-light-purple" href="#">Terms</a> /
                    <a className="link white-80 hover-gold" href="#"> Privacy </a> /
                    <a className="link white-80 hover-green" href="#">vivianpamilerin@gmail.com </a>
                </p>
            </footer>
        );
    }
}

export default Footer;
