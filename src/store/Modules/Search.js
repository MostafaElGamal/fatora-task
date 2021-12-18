const Module = {
  state: () => ({
    searchText: "",
  }),
  mutations: {
    setSearchText(state, searchText) {
      state.searchText = searchText;
    },
  },
  getters: {
    getSearchText(state) {
      return state.searchText;
    },
  },
};

export default Module;
