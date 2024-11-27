export default defineEventHandler(async (event)=>{
    const emotions =[
        {
            name: "happy",
            emojiUrl: "https://cdn.pixabay.com/photo/2016/09/01/08/24/smiley-1635449_1280.png",
            content: {
              title: "Sentimiento Feliz",
              videoUrl: "https://youtube.com/shorts/Yve7DDLYxu8?si=jSbUU6FgiVCfHCrS",
              imageUrl: "https://example.com/happy-image.jpg",
              text: "Hoy te sientes feliz y positivo. Disfruta el momento."
            }
          },
          {
            name: "Tranquilidad",
            emojiUrl: "https://example.com/neutral.png",
            content: {
              title: "Sentimiento Tranquilo",
              videoUrl: "https://www.youtube.com/embed/neutral-video",
              imageUrl: "https://example.com/neutral-image.jpg",
              text: "Me encanta la energía tranquila que tienes hoy. Es contagiosa."
            }
          },
          // Otros emojis aquí...
    ]
  
    return emotions;
  
    // return $fetch('https://fakestoreapi.com/products')
    // https://672dfaf3fd897971564485cb.mockapi.io/api/
  
  })