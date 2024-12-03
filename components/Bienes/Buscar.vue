<template>
    <!-- Barra de título azul con texto blanco -->
    <v-toolbar class="Toolbar" color="blue darken-3" dark>
      <v-text-field
        v-model="searchQuery"
        outlined
        clearable
        class="search-bar"
      ></v-text-field>
    </v-toolbar>
    <v-card-text>
      <!-- Campo de búsqueda -->
      
    </v-card-text>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
};
</script>

<style scoped>
/* Estilo para la tarjeta de búsqueda */
.search-card {
  margin: 10px auto;
  max-width: 700px;
}

/* Campo de búsqueda con estilo limpio */
.search-bar {
  margin-top: 50px;
}
.Toolbar {
  height: 80px; 
  padding: 10px;
  margin-top: 20px;

}
</style>
