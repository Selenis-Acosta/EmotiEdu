import { defineStore } from 'pinia';

interface EmojiContent {
  title: string;
  videoUrl: string;
  imageUrl: string;
  text: string;
}

interface Emoji {
  name: string;
  emojiUrl: string;
  content: EmojiContent;
}

export const useEmotionStore = defineStore({
  id: 'emotions',
  state: () => ({
    emojis: [] as Emoji[],
    selectedContent: {} as EmojiContent,
  }),
  getters: {
    getEmojis: (state) => state.emojis,
    getSelectedContent: (state) => state.selectedContent,
  },
  actions: {
    async fetchEmoji (){
      const emojis = await $fetch('/api/emotions');
      this.emojis  = emojis;
      // this.selectEmotion(emojis[0])
    },

    selectEmotion(emoji: Emoji) {
      this.selectedContent = emoji.content;
    }
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
