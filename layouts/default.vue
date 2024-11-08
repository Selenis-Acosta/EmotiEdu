<template>
    <div>
      <v-card>
    <v-layout>
      <v-app-bar
        color=""
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>

          <v-btn icon="mdi-filter" variant="text"></v-btn>
        </template>

        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >
        <!--v-list
          :items="items" :value="items.value" :to="items.value"
        ></v-list-->
        <v-list>
          <v-list-item 
            v-for="item in items"
            :key="item.value"
            :to="item.value">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 500px;">
        <slot />
      </v-main>
    </v-layout>
  </v-card>
     
      <InicioPie />
    </div>
  </template>
  <script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      items: [
        {
          title: 'Inicio',
          value: '/',
        },
        {
          title: 'Exploración Emocional',
          value: '/Exploracion',
        },
        {
          title: 'Centro de Bienestar',
          value: '/Bienestar',
        },
        {
          title: 'Área de Emergencia',
          value: '/Emergencia',
        },
        {
          title: 'Zona Personal',
          value: '/Personal',
        },
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>