// @flow
import { action, observable, computed } from 'mobx';

class Patient {
  id = Math.floor(Math.random() * 100000).toString();
  @observable firstName = '';
  @observable lastName = '';
}

class PatientsStore {
  @observable searchText = '';
  @observable searching = false;
  @observable patients: Array<Patient> = // FIXME - use fetch
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

  @computed get searchResults(): Array<Patient> {
    return this.patients.filter(
      patient => patient.firstName.startsWith(this.searchText)
    );
  }

  @action search(text: string) {
    this.searchText = text;
  }

  create(firstName: string, lastName: string) {
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

export default new PatientsStore();
