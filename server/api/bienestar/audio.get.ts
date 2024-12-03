export default defineEventHandler(() => {
  // Definición de la interfaz fuera del controlador
  interface Podcast {
    title: string;
    audioUrl: string; // 
  }

  const audio: Podcast[] = [
    {
      title: "Conflictos y Heridas Emocionales",
      audioUrl:
        '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/5LaICDehMIlTIC1s0Tioh7?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    },
    {
      title: "Poner Límites",
      audioUrl:
        '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/4y1laSf0GvCRPVFII2WO9q?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    },
    {
      title: "Acompañamiento Emocional",
      audioUrl:
        '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/1JQdiQpxxkNw7XQLWGeUkP?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    },
  ];

  // Retorno del array de datos
  return audio;
});
