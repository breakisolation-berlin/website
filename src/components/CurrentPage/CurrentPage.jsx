import React, { Component, PropTypes } from 'react';
import {PAGES} from '../../constants/ActionTypes';
import Blog from '../Pages/Blog/Blog';
import AboutUs from '../Pages/AboutUs/AboutUs';
import Sessions from '../Pages/Sessions/Sessions';
import JoinIn from '../Pages/JoinIn/JoinIn';
import ContactUs from '../Pages/ContactUs/ContactUs';

class CurrentPage extends Component {
  render() {
    const currentPage = this.props.currentPage;
    if (currentPage === PAGES.BLOG) {
      return (<Blog />);
    } else if (currentPage === PAGES.ABOUT_US) {
      return (<AboutUs content={this.props.data.about_us.content} />);
    } else if (currentPage === PAGES.SESSIONS) {
      return (<Sessions sessions={this.props.data.sessions} />);
    } else if (currentPage === PAGES.JOIN_IN) {
      return (<JoinIn content={this.props.data.about_us.content} />);
    } else if (currentPage === PAGES.CONTACT) {
      return (<ContactUs content={this.props.data.about_us.content} />);
    }
  }
}

CurrentPage.propTypes = {
  currentPage: PropTypes.string,
  data: PropTypes.object,
};

export default CurrentPage;
