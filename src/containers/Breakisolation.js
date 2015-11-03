import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Branding from '../components/Branding/Branding';
import Navigation from '../components/Navigation/Navigation';
import CurrentPage from '../components/CurrentPage/CurrentPage';
import * as WebsiteActions from '../actions/WebsiteActions';

class Breakisolation extends Component {
  render() {
    const { actions, currentPage } = this.props;
    return (<div className="break-isolation">
        <Branding actions={actions} />
        <Navigation actions={actions} />
        <CurrentPage actions={actions} currentPage={currentPage} />
    </div>);
  }
}

function mapState(state) {
  return {
    currentPage: state.get('currentPage'),
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(WebsiteActions, dispatch),
  };
}

Breakisolation.propTypes = {
  actions: PropTypes.object,
  currentPage: PropTypes.string,
};

export default connect(mapState, mapDispatch)(Breakisolation);
