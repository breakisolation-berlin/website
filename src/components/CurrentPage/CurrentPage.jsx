import React, { Component, PropTypes } from 'react';
import {PAGES} from '../../constants/ActionTypes';
import Blog from '../Pages/Blog/Blog';
import AboutUs from '../Pages/AboutUs/AboutUs';

class CurrentPage extends Component {
  render() {
    const currentPage = this.props.currentPage;
    if (currentPage === PAGES.BLOG) {
      return (<Blog />);
    } else if (currentPage === PAGES.ABOUT_US) {
      return (<AboutUs />);
    }
  }
}

CurrentPage.propTypes = {
  currentPage: PropTypes.string,
};

export default CurrentPage;
