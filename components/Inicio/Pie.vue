<template>
  <v-footer class="footer bg-blue text-center">
    <div class="w-100 py-2 text-white">
      <strong>© 2024 EmotiEdu. Todos los derechos reservados</strong>
    </div>
  </v-footer>
</template>

<style scoped>
.bg-blue {
  background-color: #4a79c0; /* Ajusta este color si quieres un tono específico de azul */
}
.footer {
  position: fixed; /* Mantiene el footer fijo en la parte inferior */
  bottom: 0; /* Lo coloca en la parte inferior de la ventana */
  left: 0; /* Se asegura que esté alineado a la izquierda */
  width: 100%; /* Asegura que ocupe todo el ancho */
  height: 0%; /* Establece una altura fija para el footer */
  padding: 0; /* Elimina el padding predeterminado */
  margin: 0; /* Elimina el margen predeterminado */
  display: flex; /* Usar flexbox para centrar contenido */
  align-items: center; /* Centra verticalmente el contenido */
  justify-content: center; /* Centra horizontalmente el contenido */
}
</style>
