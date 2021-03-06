import Vue from 'vue';
import Vuex from 'vuex';

// Make vue aware of Vuex
Vue.use(Vuex);

// Create an object to hold the initial state when
// the app starts up
const state = {
  entries: [],
};

if (localStorage && localStorage.getItem('entries') !== null) {
  state.entries = JSON.parse(localStorage.getItem('entries'));
}

const saveToLocalStorage = function saveToLocalStorage(entries) {
  if (localStorage) {
    localStorage.setItem('entries', JSON.stringify(entries));
  }
};

const mutations = {
  ADDENTRY(localState, startTime, endTime) {
    localState.entries.unshift({ startTime, endTime });
    saveToLocalStorage(localState.entries);
  },

  SETENDTIME(localState, index, endTime) {
    const entry = localState.entries[index];
    entry.endTime = endTime;
    saveToLocalStorage(localState.entries);
  },

  SETSTARTTIME(localState, index, startTime) {
    const entry = localState.entries[index];
    entry.startTime = startTime;
    saveToLocalStorage(localState.entries);
  },
};

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  state,
  mutations,
});
