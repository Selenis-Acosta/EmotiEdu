<!-- pages/Exploracion.vue -->
<template>
    <div class="exploracion-container purple-background">
      <ExploEmocionesBotones />
      <!-- <ExploEmocionesPregunta />  -->
    </div>
  </template>

<script setup>
const emotionStore = useEmotionStore();

await useAsyncData('emotions', async ()=>{
  await emotionStore.fetchEmoji()
})
</script>
  
  <style scoped>
  .purple-background {
    background-color: #ffffff; /* Color morado */
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
  
