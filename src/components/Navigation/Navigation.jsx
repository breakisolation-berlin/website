import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { PAGES } from '../../constants/ActionTypes';
import './Navigation.scss';

class Navigation extends Component {

  componentDidMount() {
    window.onhashchange = () => {
      this._autoNavigation();
    };
    this._autoNavigation();
  }

  _autoNavigation() {
    const page = window.location.hash;
    switch (page) {
    case '#about_us':
      return this._navigateTo(PAGES.ABOUT_US);
    case '#sessions':
      return this._navigateTo(PAGES.SESSIONS);
    case '#join_in':
      return this._navigateTo(PAGES.JOIN_IN);
    case '#contact':
      return this._navigateTo(PAGES.CONTACT);
    default:
      return this._navigateTo(PAGES.BLOG);
    }
  }

  _navigateTo(page) {
    this.props.actions.navigateTo(page);
  }

  _switchTo(lang) {
    this.props.actions.loadData(lang);
  }

  render() {
    const { data, currentPage } = this.props;
    const self = this;

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
              <li className={classNames({'active': currentPage === PAGES.BLOG})}><a href="#blog" onClick={this._navigateTo.bind(this, PAGES.BLOG)}>{data.news.label}</a></li>
              <li className={classNames({'active': currentPage === PAGES.ABOUT_US})}><a href="#about_us" onClick={this._navigateTo.bind(this, PAGES.ABOUT_US)}>{data.about_us.label}</a></li>
              <li className={classNames({'active': currentPage === PAGES.SESSIONS})}><a href="#sessions" onClick={this._navigateTo.bind(this, PAGES.SESSIONS)}>{data.sessions.label}</a></li>
              <li className={classNames({'active': currentPage === PAGES.JOIN_IN})}><a href="#join_in" onClick={this._navigateTo.bind(this, PAGES.JOIN_IN)}>{data.join_in.label}</a></li>
              <li className={classNames({'active': currentPage === PAGES.CONTACT})}><a href="#contact" onClick={this._navigateTo.bind(this, PAGES.CONTACT)}>{data.contact.label}</a></li>
            </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{data.language} <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    {
                      data.languages.map((language, index) => {
                        return (<li key={index}><a href="#" onClick={self._switchTo.bind(self, language.code)}>{language.label}</a></li>);
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
  currentPage: PropTypes.string,
  actions: PropTypes.object,
};

export default Navigation;
