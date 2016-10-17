// @flow
import React from 'react';

import PatientSearch from './PatientSearch';

const Header = () =>
  <header className="header">
    <PatientSearch placeholder="Find patient" />
  </header>;

export default Header;
