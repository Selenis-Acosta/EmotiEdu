<template>  
  <div class="text-center purple-background">
   
    <h1 class="header">
      <span class="highlight-blue">¿CÓMO</span> <span class="highlight-pink">TE</span> <span class="highlight-pink">SIENTES</span> <span class="highlight-lightblue">HOY?</span>
    </h1>
<br>
   
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
          <div v-html="selectedContent.videoUrl"></div>
        </div>
        <div v-if="selectedContent.imageUrl">
          <v-img :src="selectedContent.imageUrl" width="800%" height="300" contain></v-img>
        </div>
        <div v-if="selectedContent.text">{{ selectedContent.text }}</div>
      </v-card-text>
    </v-card>
  </div>
</template>
<script setup>
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
  color: rgb(240, 192, 248);
  padding: 20px;
  border-radius: 5px;
}

.emoji-header {
  font-size: 4em;
  font-weight: bold;
  margin-bottom: 20px;
}

.highlight-blue {
  color: #3695f3;
}

.highlight-pink {
  color: #e1559b;
}

.highlight-lightblue {
  color: #4089d3;
}

.emoji-button {
  text-align: center;
}

/* Clase personalizada para ajustar el tamaño de la tarjeta */
.content-card {
  padding: 200px; /* Ajuste de padding */
  background-color: #d3b5f5; /* Cambia este valor al color que desees */
  color: #2b0335; /* Cambia el color del texto si es necesario */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 1000px;
  height: auto;
  margin: 0 auto;

}
</style>