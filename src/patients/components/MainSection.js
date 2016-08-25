import React, { PropTypes } from 'react';
import { observer } from 'mobx';

import List from 'material-ui/List';

import Header from './Header';
import PatientItem from './PatientItem';

const defaultStyle = {
  // width: 300,
  // marginLeft: 20,
};

const MainSection = observer(['patientStore'], ({ patientStore }) =>
  <div>
    <Header />
    <section style={defaultStyle}>
      <List>
        {patientStore.searchResults.map(
          patient => <PatientItem key={patient.id} patient={patient} />
        )}
      </List>
    </section>
  </div>
);

// FIXME flowtype
MainSection.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
  patientStore: PropTypes.object.isRequired,
};

export default MainSection;

