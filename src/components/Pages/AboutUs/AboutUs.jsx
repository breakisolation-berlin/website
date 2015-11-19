import React, { Component, PropTypes } from 'react';
import './AboutUs.scss';

class AboutUs extends Component {
  render() {
    const { content } = this.props;
    return (
        <div className="about-us row page well">
          <div className="col-md-12">
            {
              content.map((text, index) => {
                if (text.type === 'h1') {
                  return (<h1 key={index}>{text.content}</h1>);
                } else if (text.type === 'h3') {
                  return (<h3 key={index}>{text.content}</h3>);
                } else if (text.type === 'regular') {
                  return (<p key={index} dangerouslySetInnerHTML={{__html: text.content}} />);
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
