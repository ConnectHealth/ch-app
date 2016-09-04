import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import { action, observable } from 'mobx';

import TextField from 'material-ui/TextField';

const defaultStyle = {
  marginLeft: 20,
};

@observer(['patientsStore'])
class PatientSearch extends Component {
  @observable text = '';

  @action handleEnter = (e) => {
    if (e.keyCode === 13) { // on enter
      const text = e.target.value.trim();
      this.props.patientsStore.search(text);
      this.text = '';
    }
  }

  @action handleChange = (e) => {
    this.text = e.target.value;
  }

  @action handleBlur = (e) => {
    this.props.patientsStore.search(e.target.value);
  }

  render() {
    return (
      <TextField
        type="text"
        style={defaultStyle}
        hintText={this.props.placeholder}
        autoFocus="true"
        value={this.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleEnter}
      />
    );
  }
}

/* PatientSearch.propTypes = {
 *   onSearch: PropTypes.func.isRequired,
 *   text: PropTypes.string,
 *   placeholder: PropTypes.string,
 *   patientStore: PropTypes.object.isRequired,
 * };*/

export default PatientSearch;
