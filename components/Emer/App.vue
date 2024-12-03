<template>
    <v-container>
      <ZonaEmergencia />
      <v-row>
        <v-col cols="12" md="6">
          <RecursosAyuda :recursos="recursos" />
        </v-col>
        <v-col cols="12" md="6">
          <ForoApoyo :mensajes="mensajes" @nuevo-mensaje="agregarMensaje" />
        </v-col>
      </v-row>
      <VideosApoyo />
      <ContactosEmergencia :contactos="contactos" />
    </v-container>
  </template>
  
  <script>
  import ZonaEmergencia from "./components/ZonaEmergencia.vue";
  import RecursosAyuda from "./components/RecursosAyuda.vue";
  import ForoApoyo from "./components/ForoApoyo.vue";
  import VideosApoyo from "./components/VideosApoyo.vue";
  import ContactosEmergencia from "./components/ContactosEmergencia.vue";
  
  export default {
    components: {
      ZonaEmergencia,
      RecursosAyuda,
      ForoApoyo,
      VideosApoyo,
      ContactosEmergencia,
    },
    data() {
      return {
        mensajes: [],
        recursos: [
          {
            titulo: "Guías para manejar emociones",
            descripcion: "Recursos para gestionar ansiedad, tristeza, etc.",
            enlace: "https://www.clarin.com/informacion-general/maravillosa-oracion-liberarse-miedo-angustias_0_hhzFwjeYPH.html",
          },
          {
            titulo: "Videos de meditación",
            descripcion: "Técnicas para relajarte.",
            enlace: "https://www.cigna.com/es-us/knowledge-center/hw/temas-de-salud/manejo-del-estrs-uz2209",
          },
        ],
        contactos: [
          {
            nombre: "Línea de ayuda nacional",
            detalles: "Disponible 24/7. Tel: 3206213715",
            enlace: "https://wa.link/iqvvwg",
          },
          {
            nombre: "Chat de apoyo emocional",
            detalles: "Conéctate con un especialista.",
            enlace: "https://wa.link/kwezx7",
          },
        ],
      };
    },
    methods: {
      agregarMensaje(mensaje) {
        this.mensajes.push(mensaje);
      },
    },
  };
  </script>
  