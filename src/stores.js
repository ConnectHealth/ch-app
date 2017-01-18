// @flow
import PatientsStore from './patients/store';

export type Stores = {
  patientsStore: PatientsStore,
}

const patientsStore = new PatientsStore();

const stores: Stores = {
  patientsStore,
};

export default stores;
