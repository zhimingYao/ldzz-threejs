import { defineStore } from 'pinia';
import { getLocalStorage, setLocalStorage } from '@/tools/storage';

export const useLayoutStore = defineStore('layout', {
  state: () => {
    return {
      checkRoute: getLocalStorage('checkRoute') || '/home',
      isFold: JSON.parse(getLocalStorage('isFold')) || false
    };
  },
  actions: {
    setCheckRoute(value) {
      this.checkRoute = value;
      setLocalStorage('checkRoute', value);
    },
    setIsFold(value) {
      this.isFold = value;
      setLocalStorage('isFold', value);
    }
  }
});
