import React, { Component, PropTypes } from 'react';
import './Sessions.scss';

class Sessions extends Component {
  render() {
    const { sessions } = this.props;
    if (!sessions) {
      return (<div className="sessions row"></div>);
    }
    return (
        <div className="sessions row">
          {
            sessions.locations.map((location, index) => {
              return (
                <div key={index} className="col-md-4">
                  <div className="well session-tile">
                    <h3>{location.day}</h3>
                    <p><span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span> <span dangerouslySetInnerHTML={{__html: location.place}} /></p>
                    <p><span className="glyphicon glyphicon-time" aria-hidden="true"></span> {location.time}</p>
                    <a href={location.directions_link} target="_blank">{sessions.direction_label}</a>
                  </div>
                </div>
              );
            })
          }

        </div>
    );
  }
}

Sessions.propTypes = {
  sessions: PropTypes.object,
};

export default Sessions;
