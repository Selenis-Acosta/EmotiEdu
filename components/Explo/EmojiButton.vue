<template>
    <div class="emoji-container">
      <v-speed-dial
        v-model="fab"
        :open-on-hover="true"
        direction="right"
        transition="scale-transition"
      >
        <template #activator>
          <v-btn
            color="primary"
            class="emoji-btn"
            @click="onClickEmoji"
          >
            <span>{{ emoji }}</span>
          </v-btn>
        </template>
  
        <!-- Aquí puedes agregar botones adicionales que aparecen al hacer clic en el emoji -->
        <v-btn v-for="(option, index) in options" :key="index" icon @click="handleOption(option)">
          <v-icon>{{ option.icon }}</v-icon>
        </v-btn>
      </v-speed-dial>
    </div>
  </template>
  
  <script>
  export default {
    name: "EmojiButton",
    props: {
      emoji: {
        type: String,
        required: true,
      },
      options: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        fab: false,
      };
    },
    methods: {
      onClickEmoji() {
        this.fab = !this.fab;
      },
      handleOption(option) {
        // Aquí puedes manejar la lógica para cada opción al hacer clic
        console.log("Clicked on option:", option);
      },
    },
  };
  </script>
  
  <style scoped>
  .emoji-container {
    display: inline-block;
    margin: 10px;
  }
  .emoji-btn {
    font-size: 2rem;
  }
  </style>
  
  