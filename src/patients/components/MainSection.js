// @flow
import React from 'react';
import { observer } from 'mobx-react';

import List from 'material-ui/List';

import Header from './Header';
import PatientItem from './PatientItem';

/* import { observable } from 'mobx';*/

const MainSection = observer(['patientsStore'], ({ patientsStore }) =>
  <div>
    <Header />
    <section>
      <List>
        {patientsStore.searchResults.map(
            patient => <PatientItem key={patient.id} patient={patient} />
          )}
      </List>
    </section>
  </div>
);


// FIXME flowtype
/* MainSection.contextTypes = {
 *   muiTheme: PropTypes.object.isRequired,
 *   patientStore: PropTypes.object.isRequired,
 * };
 * */
export default MainSection;

