<!-- pages/Exploracion.vue -->
<template>
    <div class="exploracion-container purple-background">
      <InicioNavegacion/>
      <ExploEmocionesBotones />
      <!-- <ExploEmocionesPregunta />  -->
      <InicioPie/>
    </div>
  </template>
  
  <script setup>
  import { useEmotionStore } from '@/store/emotions';
  import { computed } from 'vue';
  
  const emotionStore = useEmotionStore();
  
  const emojis = computed(() => emotionStore.getEmojis);
  const selectedContent = computed(() => emotionStore.getSelectedContent);
  
  function selectEmotion(emoji) {
    emotionStore.selectEmotion(emoji);
  }
  </script> 
<!-- <script setup>
// Instanciar el store
// import { useProductStore} from '@/'
const EmotionsStore = useEmotionsStore()


await useAsyncData('Emotions', async () => {
  await EmotionStore.fetchEmotions()
})
</script> -->

  
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
  
