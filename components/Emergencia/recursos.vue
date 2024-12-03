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
<template>
    <!-- Sección de Recursos -->
    <v-row>
      <v-col cols="12" md="6">
        <v-card outlined>
          <v-card-title class="text-h6">
            Recursos de Ayuda Inmediata
          </v-card-title>
          <v-card-text>
            Accede rápidamente a los siguientes recursos:
            <v-list>
              <v-list-item v-for="(recurso, index) in recursos" :key="index">
                <v-list-item-content>
                  <v-list-item-title>{{ recurso.titulo }}</v-list-item-title>
                  <v-list-item-subtitle>{{ recurso.descripcion }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn :href="recurso.enlace" target="_blank" outlined color="primary">
                    Ir
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Sección de Foro o Chat -->
      <v-col cols="12" md="6">
        <v-card outlined>
          <v-card-title class="text-h6">
            Foro de Apoyo
          </v-card-title>
          <v-card-text>
            Comparte tus experiencias con otros usuarios:
            <v-textarea outlined label="Escribe aquí tu mensaje" v-model="nuevoMensaje"></v-textarea>
            <v-btn class="mt-3" color="success" @click="enviarMensaje">
              Enviar
            </v-btn>

            <!-- Lista de mensajes -->
            <div v-if="mensajes.length" class="mt-4">
              <v-divider></v-divider>
              <v-list>
                <v-list-item v-for="(mensaje, index) in mensajes" :key="index">
                  <v-list-item-content>
                    <v-list-item-title>{{ mensaje }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
</template>