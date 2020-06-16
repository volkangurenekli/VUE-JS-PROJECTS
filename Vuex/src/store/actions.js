export const incrementAction = ({ commit }, payload) => {
  setTimeout(() => {
    commit("incrementMutuation");
  }, payload.time);
};
export const decrementAction = ({ commit }, payload) => {
  setTimeout(() => {
    commit("decrementMutuation");
  }, payload.time);
};
export const setValueActions = ({ commit }, payload) => {
  setTimeout(() => {
    commit("setValueMutation", payload);
  }, 1);
};
