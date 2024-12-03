<template>
  <v-container>

    <EmergenciaTitulo/>

    <EmergenciaRecursos/>

    <!-- Contactos de Emergencia -->
    <v-row>
      <v-col>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/FDr5iQYZDnQ?si=nOImNK0VZjhOSMNC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </v-col>
      <v-col><iframe width="560" height="315" src="https://www.youtube.com/embed/im3vc2NzCVc?si=G-T-I_Fa7lzn0_-H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></v-col>

    </v-row>
    <v-row>
      <v-col>
        <v-card class="mt-5" elevation="3">
          <v-card-title class="text-h6">Contactos de Emergencia</v-card-title>
          <v-card-text>
            En caso de crisis, contacta a:
            <v-list>
              <v-list-item v-for="(contacto, index) in contactos" :key="index">
                <v-list-item-content>
                  <v-list-item-title>{{ contacto.nombre }}</v-list-item-title>
                  <v-list-item-subtitle>{{ contacto.detalles }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn :href="contacto.enlace" target="_blank" outlined color="error">
                    Contactar
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const nuevoMensaje = ref('')
const mensajes = ref([])

const recursos = ref([
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
])

const contactos = ref([
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
])

const enviarMensaje = () => {
  if (nuevoMensaje.value.trim() !== "") {
      mensajes.value.push(nuevoMensaje.value);
      nuevoMensaje.value = "";
  }
}
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
