// @flow
import React, { Component } from 'react';
import { observer } from 'mobx-react';

import PatientSearch from './PatientSearch';

@observer(['patientsStore'])
class Header extends Component {
  handleSearch = (text: string) => {
    if (text.length !== 0) {
      this.context.patientsStore.searchText = text;
    }
  }

  render() {
    return (
      <header className="header">
        <PatientSearch
          onSearch={this.handleSearch}
          text=""
          placeholder="Find patient"
        />
      </header>
    );
  }
}

/* Header.propTypes = {
 *   patientStore: PropTypes.object.isRequired,
 * };
 * Header.contextTypes = {
 *   patientStore: PropTypes.object.isRequired,
 * };
 * */
export default Header;
