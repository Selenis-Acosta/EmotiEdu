<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6" lg="4" v-for="podcast in podcasts" :key="podcast.id">
          <v-card outlined class="mb-4 card-container">
            <v-card-title class="text-h6 white--text card-title">
              {{ podcast.title }}
            </v-card-title>
            <v-card-subtitle class="white--text">
              {{ podcast.description }}
            </v-card-subtitle>
            <v-card-text>
             <div v-html="podcast.audioUrl">

             </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "PodcastSection",
    data() {
      return {
        podcasts: [
          {
            id: 1,
            title: "Conflictos y Heridas Emocionales",
           /* description: "Consejos para manejar el estrés diario.",*/
            audioUrl: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/5LaICDehMIlTIC1s0Tioh7?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
          },
          {
            id: 2,
            title: "Episodio 2: Poner Limites",
            /*description: "Exploramos ejercicios para relajarte.", */
            audioUrl: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/4y1laSf0GvCRPVFII2WO9q?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
          },
          {
            id: 3,
            title: "Episodio 3: Acompañamiento Emocional",
           /* description: "Cómo construir una rutina mentalmente saludable.", */
            audioUrl: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/1JQdiQpxxkNw7XQLWGeUkP?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Paleta de colores */
  .card-container {
    background-color: #5a189a; /* Morado intenso */
    border-radius: 12px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  
  audio {
    margin-top: 12px;
  }
  
  .white--text {
    color: white;
  }
  
  .v-card-subtitle {
    color: #bde0fe; /* Azul claro */
    font-weight: bold;
  }
  
  .mb-4 {
    margin-bottom: 16px;
  }
  </style>
  