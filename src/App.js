import React, {Component} from 'react';
import $ from 'jquery';
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact"
import './App.css';
import Footer from "./components/Footer/Footer";
import MediaQuery from 'react-responsive'


class App extends Component {


    constructor(props) {
        super(props);

        this.state = {
            foo: 'bar',
            resumeData: {}
        };
    }

    getResumeData() {
       $.ajax( {
            url: './resumeData.json',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({resumeData: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
                alert(err);
            }
        });
    }

    componentDidMount() {
        this.getResumeData();
    }

    render() {
        return (

            <div className="App">
                <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
                    <MediaQuery minDeviceWidth={1824}>
                    </MediaQuery>
                </MediaQuery>
                <Navigation data={this.state.resumeData.main}/>
                <About data={this.state.resumeData.main}/>
                <Resume data={this.state.resumeData.resume}/>
                <Portfolio data={this.state.resumeData.portfolio}/>
                <Contact data={this.state.resumeData.main}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
