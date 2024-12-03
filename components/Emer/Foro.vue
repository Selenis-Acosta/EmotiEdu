<template>
    <v-card outlined>
      <v-card-title class="text-h6">
        Foro de Apoyo
      </v-card-title>
      <v-card-text>
        Comparte tus experiencias con otros usuarios:
        <v-textarea outlined label="Escribe aquí tu mensaje" v-model="nuevoMensaje"></v-textarea>
        <v-btn class="mt-3" color="success" @click="enviarMensaje">
          Enviar
        </v-btn>
  
        <div v-if="mensajes.length" class="mt-4">
          <v-divider></v-divider>
          <v-list>
            <v-list-item v-for="(mensaje, index) in mensajes" :key="index">
              <v-list-item-content>
                <v-list-item-title>{{ mensaje }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nuevoMensaje: "",
      };
    },
    props: {
      mensajes: {
        type: Array,
        required: true,
      },
    },
    methods: {
      enviarMensaje() {
        if (this.nuevoMensaje.trim() !== "") {
          this.$emit("nuevo-mensaje", this.nuevoMensaje);
          this.nuevoMensaje = "";
        }
      },
    },
  };
  </script>
  