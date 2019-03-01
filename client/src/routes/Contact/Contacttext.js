import React from 'react';
import "./Contact.css";

function Contacttext() {
    return (
        <span className="contactFormSpacer">
            <form class="mbr-form shadow-lg alert-dark" id="contact-form" action="https://formspree.io/thegreenmajority@gmail.com" method="post"
                data-form-title="Contact Form"><input type="hidden" data-form-email="true" className="hideMe" />
                <div class="row row-sm-offset">
                    <div class="col-sm-6 multi-horizontal" data-for="name">
                        <div class="form-group">
                            <label class="form-control-label mbr-fonts-style display-7" for="name-form1-2w">Name</label>
                            <input type="text" class="form-control" name="name" data-form-field="Name" placeholder="Your name (required)"
                                required="required" id="name-form1-2w" />
                        </div>
                    </div>
                    <input type="hidden" name="_subject" value="Portfolio Contact Email Submission" className="hideMe" />
                    <input type="hidden" name="_format" value="plain" className="hideMe" />
                    <input type="text" name="_gotcha" className="hideMe" />
                    <div class="col-sm-6 multi-horizontal" data-for="email">
                        <div class="form-group">
                            <label class="form-control-label mbr-fonts-style display-7" for="email-form1-2w">Email</label>
                            <input type="email" class="form-control" name="email" data-form-field="Email" required="required"
                                placeholder="Your email (required)" id="email-form1-2w" />
                        </div>
                    </div>
                </div>
                <div class="form-group" data-for="message">
                    <label class="form-control-label mbr-fonts-style display-7" for="message-form1-2w">Message</label>
                    <textarea type="text" class="form-control" name="message" placeholder="I can't wait to hear from you!" rows="7"
                        data-form-field="Message" id="message-form1-2w"></textarea>
                </div>
                <div class="input-group-btn p-2 pt-3 mx-5">
                    <button href="" type="submit" class="btn btn-secondary btn-form btn-block display-4">Submit</button>
                </div>
            </form>
        </span>
    );
}

export default Contacttext;