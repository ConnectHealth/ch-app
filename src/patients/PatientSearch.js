// @flow
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { action, observable } from 'mobx';

import TextField from 'material-ui/TextField';
import type { Stores } from '../stores';

const defaultStyle = {
  marginLeft: 20,
};

type Props = {
  placeholder: ?string,
  stores: Stores,
}

@observer()
class PatientSearch extends Component {
  props: Props;

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
    this.props.stores.patientsStore.search(target.value);
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
        // eslint-disable-next-line react/no-unused-prop-types
        onBlur={({ target }: {target: HTMLInputElement}) => this.handleChange(target)}
        onKeyDown={this.handleEnter}
      />
    );
  }
}

export default PatientSearch;
