<template>sss
    <v-container>
      <!-- Contenedor de videos alineados a la derecha -->
      <v-row justify="end" dense class="video-container">
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"

          v-for="video in filteredVideos"
          :key="video.id"
          class="video-card"
        >
          <v-card elevation="2" class="uniform-card">
            <!-- Título del video -->
            <v-card-title class="uniform-title">{{ video.title }}</v-card-title>
  
            <!-- Reproductor de video -->
            <v-responsive :aspect-ratio="16/9" class="video-frame">
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
  
  <script>
  export default {
    data() {
      return {
        searchQuery: "",
        videos: [
          { id: 1, title: "Conocerse", url: "https://www.youtube.com/embed/Qes1RMK9a50?si=JeHCpzyZSUixkxZl" },
          { id: 2, title: "El cerebro - emociones", url: "https://www.youtube.com/embed/TjqrualxgkI?si=MS0mQJYJT2BdHWX8" },
          { id: 3, title: "Relaciones", url: "https://www.youtube.com/embed/u4duNKPm9cM?si=6278m-XiEnqCcprj" },
        ],
      };
    },
    computed: {
      filteredVideos() {
        const query = this.searchQuery.toLowerCase();
        return this.videos.filter((video) =>
          video.title.toLowerCase().includes(query)
        );
      },
    },
  };
  </script>
  
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
  