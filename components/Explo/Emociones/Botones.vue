<template>  
  <div class="text-center purple-background">
   
    <h1 class="header">
      <span class="highlight-blue">¿CÓMO</span> <span class="highlight-pink">TE</span> <span class="highlight-pink">SIENTES</span> <span class="highlight-lightblue">HOY?</span>
    </h1>
{{emojis}}
   
    <v-row justify="center">
      <v-col v-for="(emoji, index) in emojis" :key="index" cols="2" class="emoji-button">
        <v-btn @click="selectEmotion(emoji)" color="#5544a2" rounded width="70" height="70">
          <v-img :src="emoji.emojiUrl" contain width="50" height="50" />
        </v-btn>
      </v-col>
    </v-row>
    <br>


 
    <v-card class="content-card mx-auto my-4">
      <v-card-title v-if="selectedContent">{{ selectedContent.title }}</v-card-title>
      <v-card-text v-if="selectedContent">
        <div v-if="selectedContent.videoUrl">
          <iframe :src="selectedContent.videoUrl" width="100%" height="300" frameborder="9" allowfullscreen></iframe>
        </div>
        <div v-if="selectedContent.imageUrl">
          <v-img :src="selectedContent.imageUrl" width="100%" height="300" contain></v-img>
        </div>
        <div v-if="selectedContent.text">{{ selectedContent.text }}</div>
      </v-card-text>
    </v-card>
  </div>
</template>
<script setup>
import { useEmotionStore } from '~/store/emotions';
const emotionStore = useEmotionStore();


const emojis = computed(() => emotionStore.getEmojis);
const selectedContent = computed(() => emotionStore.getSelectedContent);

function selectEmotion(emoji) {
  emotionStore.selectEmotion(emoji);
}
</script> 

<style scoped>
.purple-background {
  background-color: #8459a5;
  color: white;
  padding: 20px;
  border-radius: 5px;
}

.emoji-header {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 20px;
}

.highlight-blue {
  color: #91c3f5;
}

.highlight-pink {
  color: #f19dc7;
}

.highlight-lightblue {
  color: #91c3f5;
}

.emoji-button {
  text-align: center;
}

/* Clase personalizada para ajustar el tamaño de la tarjeta */
.content-card {
  max-width: 800px; /* Cambia este valor para ajustar el ancho máximo */
  width: 100%; /* Ajuste de ancho relativo */
  padding: 20px; /* Ajuste de padding */

    /* Ajustes de altura */
    min-height: 400px; /* Altura mínima opcional */
  height: 80px; /* Altura automática para adaptarse al contenido */
}
</style>
