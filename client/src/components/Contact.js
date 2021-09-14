import React from 'react'

const Contact = () => {
    return (
        <>

            <div className="contact-info">
                <div className="container-fluid">
                    <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
                        {/*Phone Number*/}
                        <div className="contact_info_item d-flex justify-content-start align-items-center">
                            <img src="" alt="phone" />
                            <div className="contact_info_title">
                                Phone
                            </div>
                            <div className="contact_info_text">
                                +23423235235233
                            </div>

                        </div>
                        <div className="contact_info_item d-flex justify-content-start align-items-center">
                            <img src="" alt="phone" />
                            <div className="contact_info_title">
                                Email
                            </div>
                            <div className="contact_info_text">
                                farid555a@gmail.com
                            </div>

                        </div>
                        <div className="contact_info_item d-flex justify-content-start align-items-center">
                            <img src="" alt="phone" />
                            <div className="contact_info_title">
                                Address
                            </div>
                            <div className="contact_info_text">
                                Finland
                            </div>

                        </div>
                    </div>
                </div>
                {/*Contact form*/}

            </div>
            <div className="contact_form">
                <div classname="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 ">
                            <div className="contact_form_container py-5">
                                <div className="contact_form_title">
                                    Get in Touch
                                </div>
                                <form id="contact_form">
                                    <div className="contact_form_name d-flex justify-content-between align-items-center">
                                        <input type="text" id="contact_form_name"
                                            className="contact_form_name input_field"
                                            placeholder="Your Name" required="true" />

                                        <input type="text" id="contact<-form_name"
                                            className="contact_form_email input_field"
                                            placeholder="Your Email" required="true" />

                                        <input type="numvert" id="contact_form_name"
                                            className="contact_form_phone input_field"
                                            placeholder="Your Phone Number" required="true" />
                                    </div>
                                    <div className="contact_form_text mt-5">
                                        <textarea className="text_field contac_form_message" placeholder="Message" cols="30" rows="10"></textarea>
                                    </div>
                                    <div className="contact_form_button">
                                        <button type="submit" className="button contact_submit_button">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
export default Contact;