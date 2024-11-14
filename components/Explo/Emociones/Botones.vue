<template>
  <div class="text-center purple-background">
    <!-- Texto "¿CÓMO TE SIENTES HOY?" encima de los emojis -->
    <h1 class="header">
      <span class="highlight-blue">¿CÓMO</span> <span class="highlight-pink">TE</span> <span class="highlight-pink">SIENTES</span> <span class="highlight-lightblue">HOY?</span>
    </h1>
    
    <!-- Botones de emojis -->
    <v-row justify="center">
      <v-col v-for="(emoji, index) in emojis" :key="index" cols="2" class="emoji-button">
        <v-btn @click="selectEmotion(emoji)" color="#5544a2" rounded width="70" height="70">
          <v-img :src="emoji.imageUrl" contain width="50" height="50" />
        </v-btn>
      </v-col>
    </v-row>
    <br>


    <!-- v-card que muestra el contenido de cada emoción -->
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

<script>
export default {
  data() {
    return {
      emojis: [
  { name: "happy", 
    imageUrl: "https://es.vecteezy.com/png/8470114",  
    content: { 
      title: "Sentimiento Feliz", 
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Video de YouTube válido
      imageUrl: "https://via.placeholder.com/300", 
      text: "Hoy te sientes feliz y positivo. Disfruta el momento." 
    }
  },

        { name: "Tranquilidad", 
          imageUrl: "https://example.com/neutral.png", 
          content: { title: "Sentimiento Tranquilo", 
          videoUrl: "https://www.youtube.com/embed/SDTZ7iX4vTQ", 
          imageUrl: "https://example.com/neutral-image.jpg", 
          text: "Me encanta la energía tranquila que tienes hoy. Es contagiosa." } 
        },

        { name: "neutral", 
          imageUrl: "https://example.com/neutral.png", 
          content: { title: "Sentimiento Neutral", 
          videoUrl: "https://www.youtube.com/embed/neutral-video", 
          imageUrl: "https://example.com/neutral-image.jpg", 
          text: "Es normal sentirse en un punto intermedio, todos pasamos por eso. Date tu espacio para reflexior." } 
        },
        
        { name: "sad", 
          imageUrl: "https://example.com/sad.png", 
          content: { title: "Sentimiento Triste", 
          videoUrl: "https://www.youtube.com/embed/sad-video", 
          
          imageUrl: "https://assets.pinterest.com/ext/embed.html?id=69735494222029044", 
          text: "Es normal sentirse triste a veces. Aquí tienes algunos recursos para mejorar tu día." } 
        }, 

        { name: "angry", 
         imageUrl: "https://example.com/angry.png", 
         content: { title: "Sentimiento Enojado", 
         videoUrl: "https://www.youtube.com/embed/angry-video", 
         imageUrl: "https://example.com/angry-image.jpg", 
         text: "El enojo puede ser difícil de manejar. Intenta relajarte con estos recursos." } 
        },

        { name: "Ansiedad", 
        imageUrl: "https://example.com/neutral.png", 
        content: { title: "Sentimiento Ansioso", 
        videoUrl: "https://youtube.com/shorts/KKV4a8U3mHY?si=NCG93JQIDoP9hlNP", 
        imageUrl: "https://example.com/neutral-image.jpg", 
        text: "El enojo puede ser difícil de manejar. Intenta relajarte con estos recursos." } 
      },
      ],
      selectedContent: null,
    };
  },
  methods: {
    selectEmotion(emoji) {
      this.selectedContent = emoji.content;
    },
  },
};
</script>

    <!-- Acá cambie el script para que saliera lo de store pero no salía nada 
<script setup>
import { useEmotionStore } from '@/stores/emotionStore';
import { computed } from 'vue';

const emotionStore = useEmotionStore();

const emojis = computed(() => emotionStore.getEmojis);
const selectedContent = computed(() => emotionStore.getSelectedContent);

function selectEmotion(emoji) {
  emotionStore.selectEmotion(emoji);
}
</script> -->

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
  width: 90%; /* Ajuste de ancho relativo */
  padding: 20px; /* Ajuste de padding */

    /* Ajustes de altura */
    min-height: 400px; /* Altura mínima opcional */
  height: 80px; /* Altura automática para adaptarse al contenido */
}
</style>
