import React, { PropTypes, Component } from 'react';
import { AppBar } from 'material-ui';

import PatientSearch from './PatientSearch.js';

class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(text) {
    if (text.length !== 0) {
      this.props.search(text);
    }
  }

  render() {
    return (
      <header className="header">
        <AppBar title="Patients" />
        <PatientSearch
          onSearch={this.handleSearch}
          text=""
          placeholder="Find patient"
        />
      </header>
    );
  }
}

Header.propTypes = {
  search: PropTypes.func.isRequired,
};

export default Header;
