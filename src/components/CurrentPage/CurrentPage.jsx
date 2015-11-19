import React, { Component, PropTypes } from 'react';
import {PAGES} from '../../constants/ActionTypes';
import Blog from '../Pages/Blog/Blog';
import Page from '../Pages/Page/Page';
import Sessions from '../Pages/Sessions/Sessions';

class CurrentPage extends Component {
  render() {
    const currentPage = this.props.currentPage;
    if (currentPage === PAGES.BLOG) {
      return (<Blog />);
    } else if (currentPage === PAGES.ABOUT_US) {
      return (<Page content={this.props.data.about_us.content} />);
    } else if (currentPage === PAGES.SESSIONS) {
      return (<Sessions sessions={this.props.data.sessions} />);
    } else if (currentPage === PAGES.JOIN_IN) {
      return (<Page content={this.props.data.join_in.content} />);
    } else if (currentPage === PAGES.CONTACT) {
      return (<Page content={this.props.data.contact.content} />);
    }
  }
}

CurrentPage.propTypes = {
  currentPage: PropTypes.string,
  data: PropTypes.object,
};

export default CurrentPage;
