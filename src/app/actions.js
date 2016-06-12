export const actionTypes = {
  updateTitleType: 'app/updateTitle',
};

function updateTitle(text) {
  return { type: actionTypes.updateTitleType, payload: text };
}

export const actions = {
  updateTitle,
};
