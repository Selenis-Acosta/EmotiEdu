<template>
    <v-card
      class="mx-auto"
      prepend-icon="$vuetify"
      :subtitle="subtitle"
      width="400"
    >
      <template v-slot:title>
        <span class="font-weight-black">
          {{ title}}
        </span>
      </template>

      <v-card-text class="bg-surface-light pt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
      </v-card-text>
      {{ text }}
    </v-card>
  </template>
  <script setup>
  const props = defineProps(['subtitle', 'title', 'text'])
</script>