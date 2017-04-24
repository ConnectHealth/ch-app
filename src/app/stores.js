// @flow
import { RouterStore } from 'mobx-react-router';
import PatientStore from 'patients/store';

export default class Stores {

  routerStore: RouterStore
  patientStore: PatientStore

  constructor() {
    this.routerStore = new RouterStore();
    this.patientStore = new PatientStore(this);
  }
}
