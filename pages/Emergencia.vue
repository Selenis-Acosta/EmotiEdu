<template>  
    <div class="emergencia-page">
      <InicioNavegacion />
      <div class="content">
        <h1>Zona de Emergencias</h1>
        <p>Selecciona cómo te sientes o qué necesitas para que podamos ayudarte.</p>
        
        <div class="emoji-grid">
          <button @click="handleEmotion('feliz')">😊</button>
          <button @click="handleEmotion('triste')">😢</button>
          <button @click="handleEmotion('enojado')">😡</button>
          <button @click="handleEmotion('ansioso')">😰</button>
        </div>
  
        <a href="https://wa.me/1234567890" target="_blank" class="contact-button">Contactar ahora</a>

        <ul class="help-list">
          <li><strong>Teléfono de emergencias:</strong> 911</li>
          <li><strong>Soporte emocional:</strong> <a href="https://www.support.com" target="_blank">support.com</a></li>
          <li><strong>Guías útiles:</strong> <a href="/recursos">Haz clic aquí</a></li>
        </ul>
      </div>
      <InicioPie />
    </div>
  </template>
  
  <script>
  export default {
    name: "EmergenciaPage",
    methods: {
      handleEmotion(emotion) {
        alert(`Has seleccionado: ${emotion}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .emergencia-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  
  .content {
    text-align: center;
  }
  
  .emoji-grid {
    margin-top: 20px;
    display: flex;
    gap: 15px;
    justify-content: center;
  }
  
  .emoji-grid button {
    font-size: 24px;
    padding: 10px;
    background-color: white;
    color: #4c4bfa;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .contact-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    text-decoration: none;
    border-radius: 5px;
  }
  
  .help-list {
    margin-top: 20px;
    text-align: left;
    list-style: none;
    padding: 0;
  }
  </style>
  

