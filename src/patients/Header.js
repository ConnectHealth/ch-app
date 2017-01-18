// @flow
import React from 'react';

import PatientSearch from './PatientSearch';
import type { Stores } from '../stores';

type Props = {
  stores: Stores;
}

const Header = (props: Props) =>
  <header className="header">
    <PatientSearch placeholder="Find patient" stores={props.stores} />
  </header>;

export default Header;
