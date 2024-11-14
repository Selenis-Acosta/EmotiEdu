import { defineStore } from 'pinia';

interface EmojiContent {
  title: string;
  videoUrl: string;
  imageUrl: string;
  text: string;
}

interface Emoji {
  name: string;
  imageUrl: string;
  content: EmojiContent;
}

export const useEmotionStore = defineStore({
  id: 'emotions',
  state: () => ({
    emojis: [
      {
        name: "happy",
        imageUrl: "https://example.com/happy.png",
        content: {
          title: "Sentimiento Feliz",
          videoUrl: "https://youtube.com/shorts/Yve7DDLYxu8?si=jSbUU6FgiVCfHCrS",
          imageUrl: "https://example.com/happy-image.jpg",
          text: "Hoy te sientes feliz y positivo. Disfruta el momento."
        }
      },
      {
        name: "Tranquilidad",
        imageUrl: "https://example.com/neutral.png",
        content: {
          title: "Sentimiento Tranquilo",
          videoUrl: "https://www.youtube.com/embed/neutral-video",
          imageUrl: "https://example.com/neutral-image.jpg",
          text: "Me encanta la energía tranquila que tienes hoy. Es contagiosa."
        }
      },
      // Otros emojis aquí...
    ] as Emoji[],
    selectedContent: null as EmojiContent | null,
  }),
  getters: {
    getEmojis: (state) => state.emojis,
    getSelectedContent: (state) => state.selectedContent,
  },
  actions: {
    selectEmotion(emoji: Emoji) {
      this.selectedContent = emoji.content;
    }
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
