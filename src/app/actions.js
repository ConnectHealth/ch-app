// @flow
export const actionTypes = {
  updateTitleType: 'app/updateTitle',
};

const updateTitle = (text: string) => ({ type: actionTypes.updateTitleType, payload: text });

export const actions = {
  updateTitle,
};
