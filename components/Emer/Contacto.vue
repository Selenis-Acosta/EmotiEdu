<template>
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
  </template>
  
  <script>
  export default {
    props: {
      contactos: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  