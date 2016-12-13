// @flow
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { action, observable } from 'mobx';

import TextField from 'material-ui/TextField';
import type { PatientsStore } from './store';

const defaultStyle = {
  marginLeft: 20,
};

type Props = {
  placeholder: ?string,
  patientsStore?: PatientsStore, // optional because injected
}

@observer(['patientsStore'])
class PatientSearch extends Component {
  props: Props;
  store = (this.props: any).patientsStore; // flow

  @observable text = '';

  @action handleEnter = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      /* const text = ((e.target: any):HTMLInputElement).value.trim();
       * console.log(text);
       * this.props.patientsStore.search(text);*/
      this.text = '';
    }
  }

  @action handleChange = (target: HTMLInputElement) => {
    this.text = target.value;
    this.store.search(target.value);
  }

  render() {
    return (
      <TextField
        type="text"
        style={defaultStyle}
        hintText={this.props.placeholder}
        autoFocus="true"
        value={this.text}
        onChange={({ target }: {target: HTMLInputElement}) => this.handleChange(target)}
        onBlur={({ target }: {target: HTMLInputElement}) => this.handleChange(target)}
        onKeyDown={this.handleEnter}
      />
    );
  }
}

export default PatientSearch;
