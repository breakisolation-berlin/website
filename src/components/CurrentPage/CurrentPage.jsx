import React, { Component, PropTypes } from 'react';
import {PAGES} from '../../constants/ActionTypes';
import Blog from '../Pages/Blog/Blog';
import AboutUs from '../Pages/AboutUs/AboutUs';
import Sessions from '../Pages/Sessions/Sessions';

class CurrentPage extends Component {
  render() {
    const currentPage = this.props.currentPage;
    if (currentPage === PAGES.BLOG) {
      return (<Blog />);
    } else if (currentPage === PAGES.ABOUT_US) {
      return (<AboutUs content={this.props.data.about_us.content} />);
    } else if (currentPage === PAGES.SESSIONS) {
      return (<Sessions content={this.props.data.about_us.content} />);
    }
  }
}

CurrentPage.propTypes = {
  currentPage: PropTypes.string,
  data: PropTypes.object,
};

export default CurrentPage;
