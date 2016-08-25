// @flow

// Immutable ??
// import { Map, OrderedMap } from 'immutable';
import { observable, computed } from 'mobx';

class Patient {
  id = Math.floor(Math.random() * 100000).toString();
  @observable firstName: string = '';
  @observable lastName: string = '';
}

class PatientsStore {
  @observable searchText: string = '';
  @observable patients: Array<Patient> = [];

  @computed get searchResults() {
    return this.patients.filter(
      patient => patient.firstName.startsWith(this.searchText)
    );
  }

  create(firstName, lastName) {
    this.patients.push(new Patient(firstName, lastName));
  }

  fetchPatients() {
    this.searching = true;

    // Use superagent
    this.patients =
    [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Smith',
      },
      {
        id: 2,
        firstName: 'Sarah',
        lastName: 'Brown',
      },
    ];
    this.searching = false;
  }
}

export const patientStore = new PatientsStore();
