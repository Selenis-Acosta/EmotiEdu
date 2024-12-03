<script setup>

const searchQuery = ref('')
const videos = ref([])

const videoStore = useVideoStore();

videoStore.fetchVideos()

videos.value = videoStore.getVideos;

</script>

<template>
    <v-container>
      <!-- Contenedor de videos alineados a la derecha -->
      <v-row justify="end" dense class="video-container">
        <v-col
          v-for="video in videos"
          :key="video.id"
          class="video-card"
        >
          <v-card elevation="2" class="uniform-card">
            <!-- Título del video -->
            <v-card-title class="uniform-title">{{ video.title }}</v-card-title>
  
            <!-- Reproductor de video -->
            <v-responsive aspect-ratio="16/9" class="video-frame">
                <iframe 
                    width="560" 
                    height="315" 
                    :src="video.url" 
                    :title="video.title" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen></iframe>
          
            </v-responsive>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  

  
  <style scoped>
  /* Estilos uniformes */
  .search-bar {
    margin: 20px auto;
    max-width: 400px;
  }
  
  .video-container {
    margin-top: 20px;
  }
  
  .uniform-card {
    border-radius: 8px;
    overflow: hidden;
    background-color: #f9f9f9;
  }
  
  .uniform-title {
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    padding: 10px 0;
    background-color: #f0f0f0;
    color: #333;
  }
  
  .video-frame iframe {
    border-radius: 0 0 8px 8px;
  }
  
  .video-card {
    margin-bottom: 20px;
  }
  </style>
  