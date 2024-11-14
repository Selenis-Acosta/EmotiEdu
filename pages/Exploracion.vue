<!-- pages/Exploracion.vue -->
<template>
    <div class="exploracion-container purple-background">
      <InicioNavegacion/>
      <EmocionesBotones />
      <ExploEmocionesPregunta />
      <InicioPie/>
    </div>
  </template>
  
  <script setup></script>
  
  <style scoped>
  .purple-background {
    background-color: #9575CD; /* Color morado */
    color: white; /* Color del texto en blanco */
    min-height: 100vh; /* Asegura que el fondo cubra toda la página */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .exploracion-container {
    text-align: center;
  }
  </style>
  