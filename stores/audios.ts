import { defineStore } from 'pinia';

interface podcast {   
    title: string;
    audiourl: string;
}

export const useAudioStore = defineStore({
  id: 'AudioStore',
  state: () => ({
    audios: [] as podcast[],
  }),
  getters: {
    getAudios: (state) => state.audios,
  },
  actions: {
    async fetchAudios() {
        const audiosApi : any = await $fetch('/api/bienestar/audio')
        // console.log('audiosAPi');
        // console.log(audiosApi)
        this.audios = audiosApi;
    }
  },
  persist: {
    storage: persistedState.localStorage,
  },
});



