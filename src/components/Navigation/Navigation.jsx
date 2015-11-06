import React, { Component, PropTypes } from 'react';
import './Navigation.scss';

class Navigation extends Component {

  componentDidMount() {
  }

  render() {
    const { data } = this.props;

    if (!data.news) {
      return (<div></div>);
    }
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
              <li><a href="#">{data.news.label}</a></li>
              <li><a href="#">{data.about_us.label}</a></li>
              <li><a href="#">{data.sessions.label}</a></li>
              <li><a href="#">{data.join_in.label}</a></li>
              <li><a href="#">{data.contact.label}</a></li>
            </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{data.language} <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    {
                      data.languages.map((language, index) => {
                        return (<li key={index}><a href="#">{language.label}</a></li>);
                      })
                    }
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}

Navigation.propTypes = {
  data: PropTypes.object,
};

export default Navigation;
