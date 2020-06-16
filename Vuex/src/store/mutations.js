export const incrementMutuation = (state) => {
  state.counter++;
};

export const decrementMutuation = (state) => {
  state.counter--;
};

export const setValueMutation = (state, payload) => {
  state.value = payload;
};
