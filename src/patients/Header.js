// @flow
import React from 'react';

import PatientSearch from './PatientSearch';
import type PatientStores from './store';

type Props = {
  patientStore: PatientStores;
}

const Header = (props: Props) =>
  <header className="header">
    <PatientSearch placeholder="Find patient" patientStore={props.patientStore} />
  </header>;

export default Header;
