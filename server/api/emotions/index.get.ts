export default defineEventHandler(async (event)=>{
    const emotions =[
        {
            name: "Euforia",
            emojiUrl: "https://cdn.pixabay.com/photo/2016/09/01/08/25/smiley-1635456_1280.png",
            content: {
              title: "Sentimientos de Euforia",
              videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/p0fZXkmWGzE?si=QQ1dNG-ftcscgI_f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
              imageUrl: "https://example.com/happy-image.jpg",
              text: "Hoy te sientes euforico y positivo. Disfruta el momento."
            }
          },
          {
            name: "Felicidad",
            emojiUrl: "https://cdn.pixabay.com/photo/2016/09/01/08/24/smiley-1635451_1280.png",
            content: {
              title: "Sentimiento Feliz",
              videoUrl: "https://www.youtube.com/embed/neutral-video",
              imageUrl: "https://example.com/neutral-image.jpg",
              text: "El brillo de lo que sientes hoy es el resultado de todo lo que has superado."
            }
          },
          {
            name: "Tranquilidad",
            emojiUrl: "https://cdn.pixabay.com/photo/2016/09/01/08/24/smiley-1635449_1280.png",
            content: {
              title: "Sentimiento Tranquilo",
              videoUrl: "https://www.youtube.com/embed/neutral-video",
              imageUrl: "https://example.com/neutral-image.jpg",
              text: "Me encanta la energía tranquila que tienes hoy. Es contagiosa."
            }
          },
          {
            name: "Neutralidad",
            emojiUrl: "https://cdn.pixabay.com/photo/2016/09/01/08/24/smiley-1635450_1280.png",
            content: {
              title: "Sentimiento Neutral",
              videoUrl: "https://www.youtube.com/embed/neutral-video",
              imageUrl: "https://example.com/neutral-image.jpg",
              text: "Me encanta la energía tranquila que tienes hoy. Es contagiosa."
            }
          },
          {
            name: "Tristeza",
            emojiUrl: "https://cdn.pixabay.com/photo/2016/09/01/08/24/smiley-1635448_1280.png",
            content: {
              title: "Sentimiento de tristeza",
              videoUrl: "https://www.youtube.com/embed/neutral-video",
              imageUrl: "https://example.com/neutral-image.jpg",
              text: "Me encanta la energía tranquila que tienes hoy. Es contagiosa."
            }
          },
          {
            name: "Frustración",
            emojiUrl: "https://cdn.pixabay.com/photo/2016/09/01/08/25/smiley-1635454_1280.png",
            content: {
              title: "Sentimiento de frustración",
              videoUrl: "https://www.youtube.com/embed/neutral-video",
              imageUrl: "https://example.com/neutral-image.jpg",
              text: "Me encanta la energía tranquila que tienes hoy. Es contagiosa."
            }
          },
          
    ]
  
    return emotions;
  
    // return $fetch('https://fakestoreapi.com/products')
    // https://672dfaf3fd897971564485cb.mockapi.io/api/
  
  })