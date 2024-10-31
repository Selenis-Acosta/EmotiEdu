<template>
  <v-app-bar :elevation="2" color="#bc81e2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon>
        <v-img src=""></v-img>
      </v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>
      <nuxt-link to="/">Inicio</nuxt-link>
    </v-app-bar-title>

    <v-app-bar-title>
      <nuxt-link to="/Exploracion">Exploración Emocional</nuxt-link>
    </v-app-bar-title>

    <v-app-bar-title>
      <nuxt-link to="/Bienestar">Centro de Bienestar</nuxt-link>
    </v-app-bar-title>

    <v-app-bar-title>
      <nuxt-link to="/Emergencia">Área de Emergencia</nuxt-link>
    </v-app-bar-title>

    <v-app-bar-title>
      <nuxt-link to="/Personal">Zona Personal</nuxt-link>
    </v-app-bar-title>
  </v-app-bar>
</template>