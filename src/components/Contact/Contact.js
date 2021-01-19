import React, {Component} from "react";
import './Contact.css';
import '../MediaQuery.css';

class Contact extends Component {
    render() {

        if (this.props.data) {
            var name = this.props.data.name;
            var street = this.props.data.address.street;
            var city = this.props.data.address.city;
            var state = this.props.data.address.state;
            var country = this.props.data.address.country;
            var phone = this.props.data.phone;
            var message = this.props.data.contactmessage;
        }
        return (

            <section id="contact">
                <div className="row">
                    <div className="message">
                        <h3>{message}</h3>
                    </div>
                    <div className="eight columns">

                        <form action="" method="post" id="contactForm" name="contactForm">
                            <fieldset>

                                <div>
                                    <label htmlFor="contactName">Name <span className="required">*</span></label>
                                    <input type="text" defaultValue="" size="35" id="contactName" name="contactName"/>
                                </div>

                                <div>
                                    <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                    <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail"/>
                                </div>

                                <div>
                                    <label htmlFor="contactSubject">Subject</label>
                                    <input type="text" defaultValue="" size="35" id="contactSubject"
                                           name="contactSubject"/>
                                </div>

                                <div>
                                    <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                    <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                                </div>
                                <div>
                                    <button className="submit">Submit</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>

                        <div className="address">

                            <h4>Address and Phone</h4>
                            <p >
                                {name}<br/>
                                {street}<br/>
                                {city} {state}, {country}<br/>
                                <span>{phone}</span>
                            </p>
                        </div>



                </div>
            </section>
        );
    }
}
export default Contact;