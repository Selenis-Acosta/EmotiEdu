<script setup lang="ts">
import Navegacion from '@/components/Inicio/Navegacion.vue';
</script>

<template>
  <div class="fondo-morado">
    <InicioNavegacion />
    <br />
    <br />
    <br />
    <InicioBienvenidaTexto />
    <InicioBienvenidaImagen />
    <br />
    <InicioPie />
  </div>
</template>

<style scoped>
.fondo-morado {
  background-color: #9575CD;
  min-height: 100vh; /* Asegura que cubra toda la pantalla */
  padding: 20px; /* Opcional: Ajusta el espacio interno */
}
</style>
