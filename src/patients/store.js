// @flow
import { action, observable, computed } from 'mobx';
import type Stores from 'app/stores';

/* import ApolloClient from 'apollo-client'; // default?*/

export class Patient {
  id = Math.floor(Math.random() * 100000).toString();
  @observable firstName = '';
  @observable lastName = '';
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// FIXME - move
/* const allPatientsQuiery = gql`
 *
 * `;
 * */
export default class PatientStore {
  stores: Stores;
  @observable searchText = '';
  @observable searching = false;
  @observable patients: Patient[] = [
    // FIXME - use fetch
    /* new Patient('John'),*/
    /* new Patient('John', 'Smith'),*/
    /* {
     *   id: 1,
     *   firstName: 'John',
     *   lastName: 'Smith',
     * },*/
    /* {
     *   id: 2,
     *   firstName: 'Sarah',
     *   lastName: 'Brown',
     * },*/
  ];

  constructor(stores: Stores) {
    this.stores = stores;
  }

  @computed get searchResults(): Patient[] {
    return this.patients.filter(patient =>
      patient.firstName.startsWith(this.searchText)
    );
  }

  @action search(text: string) {
    this.searchText = text;
  }

  @action create(firstName: string, lastName: string) {
    this.patients.push(new Patient(firstName, lastName));
  }

  //  @action fetchPatients() {
  //    this.searching = true;
  //
  //    Use superagent
  //    this.patients =
  //      [
  //        new Patient('John', 'Smith'),
  //        /* [
  //         *   {
  //         *     id: 1,
  //         *     firstName: 'John',
  //         *     lastName: 'Smith',
  //         *   },
  //         *   {
  //         *     id: 2,
  //         *     firstName: 'Sarah',
  //         *     lastName: 'Brown',
  //         *   },*/
  //      ];
  //    this.searching = false;
  //  }
}
