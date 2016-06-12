// fixme naming
export const actionTypes = {
  CREATE: 'patients/CREATE',
  SEARCH: 'patients/SEARCH',
  SEARCHING: 'patients/SEARCHING',
  SEARCH_SUCCESS: 'patients/SEARCH_SUCCESS',
  SEARCH_ERROR: 'patients/SEARCH_ERROR',
};

function create(text) {
  return { type: actionTypes.CREATE, text };
}

function edit(id, text) {
  return { type: actionTypes.EDIT, id, text };
}

function search() {
  return { type: actionTypes.SEARCH };
}

export const actions = {
  create,
  edit,
  search,
};
