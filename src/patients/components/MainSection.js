import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { List } from 'material-ui';

import Header from './Header';
import PatientItem from './PatientItem';

import * as allActions from '../actions';

const defaultStyle = {
  width: 300,
  marginLeft: 20,
};


class MainSection extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleClearCompleted = this.handleClearCompleted.bind(this);
  }

  handleClearCompleted() {
    const atLeastOneCompleted = this.props.patients.some((patient) => patient.completed);
    if (atLeastOneCompleted) {
      this.props.actions.clearCompleted();
    }
  }

  render() {
    const { patients, actions } = this.props;

    return (
      <div>
        <Header search={this.props.actions.search} />
        <section className="main" style={defaultStyle}>
          <List className="patient-list">
            {patients.map(
              (patient, id) => <PatientItem key={id} patient={patient} patientId={id} {...actions} />
            )}
          </List>
        </section>
      </div>
    );
  }
}

MainSection.propTypes = {
  patients: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    patients: state.patients,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection);
