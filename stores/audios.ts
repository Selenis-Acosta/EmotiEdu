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
    async fetchpodcast() {
        const audiosApi : any = await $fetch('/api/bienestar/audios')
        console.log('audiosAPi');
        console.log(audiosApi)
        this.audios = audiosApi;
    }
  },
  persist: {
    storage: persistedState.localStorage,
  },
});



