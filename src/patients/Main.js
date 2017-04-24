// @flow
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';

import List from 'material-ui/List';

import Header from './Header';
import PatientItem from './PatientItem';

import type PatientStore from './store';

type Props = {
  patientStore: PatientStore,
}

@observer
class Main extends Component {
  props: Props;

  @action handleAdd = () => {
    this.props.patientStore.create('tt', 'bb');
  }

  render() {
    return (
      <div>
        <Header patientStore={this.props.patientStore} />
        <section>
          <List>
            {this.props.patientStore.searchResults.map(
               patient => <PatientItem key={patient.id} patient={patient} />,
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

