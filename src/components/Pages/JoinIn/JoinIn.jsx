import React, { Component, PropTypes } from 'react';
import './JoinIn.scss';

class JoinIn extends Component {
  render() {
    const { content } = this.props;
    console.log(content);
    return (
        <div className="join-in row">
          <div className="col-md-12">
          </div>
        </div>
    );
  }
}

JoinIn.propTypes = {
  content: PropTypes.array,
};

export default JoinIn;
