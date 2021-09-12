const themeStore = {
  namespaced: true,
  state: {
    darkMode: false,
  },
  getters: {
    darkMode: (state) => state.darkMode,
  },
  mutations: {
    setTheme: (state, darkMode) => state.darkMode = darkMode,
  },
  actions: {
    changeTheme({commit}, darkMode){
      commit('setTheme', darkMode);
    },
  },
}

export {themeStore};