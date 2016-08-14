export const addEntry = function addEntry({ dispatch }, startTime, endTime, interval) {
  dispatch('ADDENTRY', startTime, endTime, interval);
};

export const setStartTime = function setStartTime({ dispatch }, index, startTime) {
  dispatch('SETSTARTTIME', index, startTime);
};

export const setEndTime = function setEndTime({ dispatch }, index, endTime) {
  dispatch('SETENDTIME', index, endTime);
};
