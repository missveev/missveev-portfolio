import React, { Component } from 'react';
import './Footer.css';
class Footer extends Component {
    render() {

        if(this.props.data){
            var networks= this.props.data.social.map(function(network){
                return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
            })
        }

        return (
            <footer className="bg-near-black white-80 pv5 pv6-l ph4">
                <p className="f6"><span className="dib mr4 mr5-ns">©2021 LazyWeirdVeevDev.</span>
                    <a className="link white-80 hover-light-purple" href="/terms">Terms</a> /
                    <a className="link white-80 hover-gold" href="/privacy"> Privacy </a> /
                    <a className="link white-80 hover-green" href="#">vivianpamilerin@gmail.com </a>
                </p>
            </footer>
        );
    }
}

export default Footer;
