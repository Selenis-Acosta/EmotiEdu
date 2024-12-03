<template>
  <div>
    <JBienesBuscar/>
    <BienesVideos/>
    <BienesAudios/>
  </div>
</template>
<script setup>
const videoStore = useVideoStore();
const audioStore = useAudioStore();

await useAsyncData ( 'Bienestar', async ()=> {
  await videoStore.fetchVideos ();
  await audioStore.fetchAudios ()
}

)
</script>
