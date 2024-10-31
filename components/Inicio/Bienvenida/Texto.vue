<script setup lang="ts">
import Button from '../Button.vue';
</script>

<template>
   <v-col cols="6">
    <v-card
      class="mx-auto"
      width="700"
      height="400"
    >
    <template v-slot:title>
      <br>
      <br>
  <span class="font-weight-black" style="font-size: 90px;">
    <span style="color: #7b3f98;"> Emoti</span><span style="color: #007bff;">Edu</span>
  </span>
</template>
      <template>
        <span class="font-weight-black" style="font-size:25px;">La verdadera fortaleza no está en no caer, 
          sino en levantarse cada vez que lo haces</span>
      </template>
      <br>
      <br>
      <InicioButton/>
    </v-card>
  </v-col>
  </template>
  