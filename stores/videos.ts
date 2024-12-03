import { defineStore } from 'pinia';

interface Video {   
    id: number;
    title: string;
    url: string;
}

export const useVideoStore = defineStore({
  id: 'videoStore',
  state: () => ({
    videos: [] as Video[],
  }),
  getters: {
    getVideos: (state) => state.videos,
  },
  actions: {
    async fetchVideos() {
        const videosApi : any = await $fetch('/api/bienestar')
        console.log('VideosAPi');
        console.log(videosApi)
        this.videos = videosApi;
    }
  },
  persist: {
    storage: persistedState.localStorage,
  },
});



