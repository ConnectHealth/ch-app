// @flow
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { action, observable } from 'mobx';

import TextField from 'material-ui/TextField';
import type { PatientsStore } from '../store';

const defaultStyle = {
  marginLeft: 20,
};

type Props = {
  placeholder: ?string,
  patientsStore: ?PatientsStore, // FIXME optional because injected
}

@observer(['patientsStore'])
class PatientSearch extends Component {
  props: Props;
  @observable text = '';

  @action handleEnter = (e: KeyboardEvent) => {
    if (e.keyCode === 13) { // on enter
      const text = e.target.value.trim();
      this.props.patientsStore.search(text);
      this.text = '';
    }
  }

  @action handleChange = (target: HTMLInputElement) => {
    this.text = target.value;
    this.props.patientsStore.search(target.value);
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
        onChange={({target}: {target: HTMLInputElement}) => this.handleChange(target)}
        onBlur={({target}: {target: HTMLInputElement}) => this.handleChange(target)}
        onKeyDown={this.handleEnter}
      />
    );
  }
}

export default PatientSearch;
