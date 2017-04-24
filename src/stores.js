// @flow
import PatientStore from './patients/store';

export default class RootStore {
  patientStore: PatientStore

  constructor() {
    this.patientStore = new PatientStore(this);
  }
}

