<template>
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
  </template>
  
  <script>
  export default {
    props: {
      recursos: {
        type: Array,
        required: true,
      },
    },
  };
  </script>