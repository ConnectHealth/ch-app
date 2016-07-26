// @flow
export type Patient = string;

export type Action =
    { type: 'CREATE', patient: Patient }
  | { type: 'SEARCH' }
  | { type: 'SEARCHING' }
  | { type: 'SEARCH_SUCCESS', patients: Array<Patient>}
  | { type: 'SEARCH_ERROR' }
  ;

const create = (patient: string): Action => ({ type: 'CREATE', patient });

const search = (): Action => ({ type: 'SEARCH' });

export const actions = {
  create,
  search,
};
