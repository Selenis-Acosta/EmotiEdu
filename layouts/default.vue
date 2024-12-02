<template>
  <div>
    <v-card>
      <v-layout>
        <!-- Barra de navegación horizontal -->
        <v-app-bar color="#6a1b9a" prominent dark>
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

          <v-toolbar-title>VISTAS</v-toolbar-title>

          <v-spacer></v-spacer>
        </v-app-bar>

        <!-- Drawer para navegación en dispositivos móviles -->
        <v-navigation-drawer
          v-model="drawer"
          color="#6a1b9a"
          dark
          :location="$vuetify.display.mobile ? 'bottom' : undefined"
          temporary
        >
          <v-list>
            <v-list-item 
              v-for="item in items"
              :key="item.value"
              :to="item.value">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <!-- Contenido principal -->
        <v-main >
          <slot />
        </v-main>
      </v-layout>
    </v-card>

    <!-- Pie de página (si se necesita) -->
    <InicioPie />
  </div>
</template>

<script setup>
    const drawer = ref(false);
    const items =  ref([
      { title: 'Inicio', value: '/' },
      { title: 'Exploración Emocional', value: '/Exploracion' },
      { title: 'Centro de Bienestar', value: '/Bienestar' },
      { title: 'Área de Emergencia', value: '/Emergencia' },
      { title: 'Zona Personal', value: '/Personal' },
    ]);
</script>

<style>
.v-toolbar-title, .v-list-item-title {
  color: white; /* Asegura que las letras sean blancas */
}
</style>
