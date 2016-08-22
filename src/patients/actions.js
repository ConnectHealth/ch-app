// @flow
// FIXME - should this go here?
export type Patient = {
  firstName: string,
  lastName: string,
};

export type Action =
    { type: 'CREATE', patient: Patient }
  | { type: 'SEARCH' }
  | { type: 'SEARCHING' }
  | { type: 'SEARCH_SUCCESS', patients: Array<Patient>}
  | { type: 'SEARCH_ERROR' }
  ;

const create = (patient: Patient): Action => ({ type: 'CREATE', patient });

const search = (): Action => ({ type: 'SEARCH' });

export const actions = {
  create,
  search,
};
