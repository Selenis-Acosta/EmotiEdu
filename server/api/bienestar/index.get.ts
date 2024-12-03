export default defineEventHandler(()=>{

    interface Video {   
        id: number;
        title: string;
        url: string;
    }

    const videos : Video[] = [
        { id: 1, title: "Conocerse", url: "https://www.youtube.com/embed/Qes1RMK9a50?si=JeHCpzyZSUixkxZl" },
        { id: 2, title: "El cerebro - emociones", url: "https://www.youtube.com/embed/TjqrualxgkI?si=MS0mQJYJT2BdHWX8" },
        { id: 3, title: "¿Por qué nos equivocamos en el amor?", url: "https://www.youtube.com/embed/u4duNKPm9cM?si=6278m-XiEnqCcprj" },
        { id: 4, title: "Relaciones", url: "https://www.youtube.com/embed/US6AMNNkzoc?si=YiCD0P7IOwYUdGfI" },
      ]


      return videos;

})