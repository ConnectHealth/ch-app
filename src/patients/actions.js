import { actionTypes as t } from './constants';

export function create(text) {
  return { type: t.CREATE, text };
}

export function edit(id, text) {
  return { type: t.EDIT, id, text };
}

export function search() {
  return { type: t.SEARCH };
}
