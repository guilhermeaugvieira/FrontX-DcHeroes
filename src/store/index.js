import { createStore } from 'vuex';
import {themeStore} from './modules/theme-store';

const store = createStore({
  modules: {
    theme: themeStore,
  }
});

export default store;
