import React, { Component, PropTypes } from 'react';
import './ContactUs.scss';

class ContactUs extends Component {
  render() {
    const { content } = this.props;
    console.log(content);
    return (
        <div className="contact-us row">
          <div className="col-md-12">
          </div>
        </div>
    );
  }
}

ContactUs.propTypes = {
  content: PropTypes.array,
};

export default ContactUs;
