import React from  'react';
import ContactFrom from './ContactForm';
const Contact = () => {
    return (
        <>
            <div className="jumbotron jumbutron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Contact Register</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <ContactFrom/>
                </div>
                <div className="col-md-7">
                    <div>Lis of contacts</div>
                </div>
            </div>
        </>
    )
}

export default Contact;