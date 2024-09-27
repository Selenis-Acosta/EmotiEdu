<template>
    <h1>Página de inicio</h1>
    <card :title="title" :subtitle :text/> 
    </template> 
    <script setup> 
    const title = ref('productos');
    const subtitle = ref('en promoción');
    const text = ref('hasta el 30 de');
</script>

