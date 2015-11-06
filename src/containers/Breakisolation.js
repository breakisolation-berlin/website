import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Branding from '../components/Branding/Branding';
import Navigation from '../components/Navigation/Navigation';
import CurrentPage from '../components/CurrentPage/CurrentPage';
import * as WebsiteActions from '../actions/WebsiteActions';

class Breakisolation extends Component {

  componentDidMount() {
    this.props.actions.loadData();
  }

  render() {
    const { actions, currentPage, data } = this.props;
    return (<div className="break-isolation pure-u-1-1">
        <Branding actions={actions} />
        <Navigation actions={actions} data={data} currentPage={currentPage} />
        <CurrentPage actions={actions} currentPage={currentPage} />
    </div>);
  }
}

function mapState(state) {
  return {
    currentPage: state.get('currentPage'),
    data: state.get('data'),
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
  data: PropTypes.object,
};

export default connect(mapState, mapDispatch)(Breakisolation);
