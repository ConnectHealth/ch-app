// @flow
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';

import List from 'material-ui/List';

import Header from './Header';
import PatientItem from './PatientItem';

import type { PatientsStore } from './store';

type Props = {
  patientsStore: PatientsStore,
}

@observer(['patientsStore'])
class Main extends Component {
  props: Props;

  @action handleAdd = () => {
    this.props.patientsStore.create('tt', 'bb');
  }

  render() {
    return (
      <div>
        <Header />
        <section>
          <List>
            {this.props.patientsStore.searchResults.map(
                patient => <PatientItem key={patient.id} patient={patient} />
              )}
          </List>
        </section>
        <section>
          <button onClick={this.handleAdd}>Add</button>
        </section>
      </div>
      );
  }
}

export default Main;

