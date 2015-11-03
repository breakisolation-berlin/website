import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Branding from '../components/Branding/Branding';
import Navigation from '../components/Navigation/Navigation';
import * as WebsiteActions from '../actions/WebsiteActions';

class Breakisolation extends Component {
  render() {
    const { actions } = this.props;

    return (<div className="page">
        <Branding actions={actions} />
        <Navigation actions={actions} />
      </div>);
  }
}

function mapState(state) {
  return {
    board: state.board,
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(WebsiteActions, dispatch),
  };
}

Breakisolation.propTypes = {
  actions: PropTypes.object,
};

export default connect(mapState, mapDispatch)(Breakisolation);
