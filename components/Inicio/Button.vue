<template>
  <v-container>
    <!-- Botón de inicio de sesión -->
    <v-btn color="blue" dark @click="dialog = true">
      Iniciar Sesión
    </v-btn>

    <!-- Modal de inicio de sesión -->
    <v-dialog v-model="dialog" max-width="400px">
      <v-card>
        <v-card-title class="text-h5">Inicio de Sesión</v-card-title>
        <v-card-text>
          <v-form ref="loginForm" v-model="valid">
            <v-text-field
              v-model="email"
              label="Correo Electrónico"
              type="email"
              :rules="[rules.required, rules.email]"
              outlined
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="Contraseña"
              type="password"
              :rules="[rules.required]"
              outlined
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="login">Entrar</v-btn>
          <v-btn color="red darken-1" text @click="dialog = false">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      email: "",
      password: "",
      valid: false,
      rules: {
        required: (value) => !!value || "Este campo es obligatorio.",
        email: (value) =>
          /.+@.+\..+/.test(value) || "Debe ser un correo válido.",
      },
    };
  },
  methods: {
    login() {
      if (this.$refs.loginForm.validate()) {
        // Aquí procesarías el inicio de sesión (llamada API, validación, etc.)
        console.log("Email:", this.email);
        console.log("Contraseña:", this.password);
        this.dialog = false;
      }
    },
  },
};
</script>

<style scoped>
.v-btn {
  margin: 20px;
}
</style>
