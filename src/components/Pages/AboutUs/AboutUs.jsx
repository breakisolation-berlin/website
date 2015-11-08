import React, { Component, PropTypes } from 'react';
import './AboutUs.scss';

class AboutUs extends Component {
  render() {
    const { content } = this.props;
    return (
        <div className="about-us row">
          <div className="col-md-12">
            {
              content.map((text, index) => {
                if (text.type === 'bold') {
                  return (<h1 key={index}>{text.content}</h1>);
                } else if (text.type === 'regular') {
                  return (<p key={index}>{text.content}</p>);
                }
              })
            }
          </div>
        </div>
    );
  }
}

AboutUs.propTypes = {
  content: PropTypes.array,
};

export default AboutUs;
