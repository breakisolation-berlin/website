import React, { Component, PropTypes } from 'react';
import './Sessions.scss';

class Sessions extends Component {
  render() {
    const { content } = this.props;
    console.log(content);
    return (
        <div className="sessions row">
          <div className="col-md-12">
          </div>
        </div>
    );
  }
}

Sessions.propTypes = {
  content: PropTypes.array,
};

export default Sessions;
