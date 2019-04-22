import React from 'react';
import "./Contact.css";

function Contacttext() {
    return (
        <span className="contactFormSpacer">
            <form className="mbr-form shadow-lg bg-dark text-light" id="contact-form" action="https://formspree.io/thegreenmajority@gmail.com" method="post"
                data-form-title="Contact Form"><input type="hidden" data-form-email="true" className="hideMe" />
                <div className="row row-sm-offset">
                    <div className="col-sm-6 multi-horizontal" data-for="name">
                        <div className="form-group">
                            <label className="form-control-label mbr-fonts-style display-7" htmlFor="name-form1-2w">Name</label>
                            <input type="text" className="form-control" name="name" data-form-field="Name" placeholder="Your name (required)"
                                required="required" id="name-form1-2w" />
                        </div>
                    </div>
                    <input type="hidden" name="_subject" value="Portfolio Contact Form" className="hideMe" />
                    <input type="hidden" name="_format" value="plain" className="hideMe" />
                    <input type="text" name="_gotcha" className="hideMe" />
                    <div className="col-sm-6 multi-horizontal" data-for="email">
                        <div className="form-group">
                            <label className="form-control-label mbr-fonts-style display-7" htmlFor="email-form1-2w">Email</label>
                            <input type="email" className="form-control" name="email" data-form-field="Email" required="required"
                                placeholder="Your email (required)" id="email-form1-2w" />
                        </div>
                    </div>
                </div>
                <div className="form-group" data-for="message">
                    <label className="form-control-label mbr-fonts-style display-7" htmlFor="message-form1-2w">Message</label>
                    <textarea type="text" className="form-control" name="message" placeholder="I can't wait to hear from you!" rows="7"
                        data-form-field="Message" id="message-form1-2w"></textarea>
                </div>
                <div className="input-group-btn p-2 pt-3 mx-5">
                    <button type="submit" className="btn btn-primary btn-form btn-block display-4">Submit</button>
                </div>
            </form>
        </span>
    );
}

export default Contacttext;