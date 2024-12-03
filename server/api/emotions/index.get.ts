export default defineEventHandler(async (event)=>{
  const emotions =[
      {
          name: "Euforia",
          emojiUrl: "https://imagedelivery.net/ZMsc4Rh1AHFp0qz_tfBn9w/png_08--nhQBoAZrZbbQ-QCUL/public?id=2024-12-03T02:49:48.630Z",
          content: {
            title: "Eufórico",
            videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/2wzXgRbxqVs?si=sfwWjAqaIYCkrFwi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
          }
        },
        {
          name: "Alegría",
          emojiUrl: "https://imagedelivery.net/ZMsc4Rh1AHFp0qz_tfBn9w/png_01--NG0gi4uktQPkshthu/public?id=2024-12-03T02:55:54.155Z",
          content: {
            title: "Alegre",
            videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/hyetfmz3gcM?si=M5efmaCxvRf6MqGf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
          }
        },
        {
          name: "Confianza",
          emojiUrl: "https://imagedelivery.net/ZMsc4Rh1AHFp0qz_tfBn9w/png_17--t0bmeV6sw7hDZukQD/public?id=2024-12-03T03:22:35.255Z",
          content: {
            title: "Seguro",
            videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/gJOJKStkBYU?si=WnY8wwVp3G_T7Vp9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
          }
        },   
        {
          name: "Aburrimiento",
          emojiUrl: "https://imagedelivery.net/ZMsc4Rh1AHFp0qz_tfBn9w/png_40--eQpSY7nwgH0vzsWBU/public?id=2024-12-03T03:00:53.392Z",
          content: {
            title: "Aburrido",
            videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/b9u_1XoNgJo?si=-dnJrKxIyNETl2ux" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
          }
        },
        {
          name: "Indiferencia",
          emojiUrl: "https://imagedelivery.net/ZMsc4Rh1AHFp0qz_tfBn9w/png_14--5Vg9PijBOYYzZXrzW/public?id=2024-12-03T03:01:44.129Z",
          content: {
            title: "Indiferente",
            videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dw1dFWdRnts?si=0fgNpdngkXjPfJDW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
          }
        },
        {
          name: "Asco",
          emojiUrl: "https://imagedelivery.net/ZMsc4Rh1AHFp0qz_tfBn9w/png_20--rWKJWxMmS_NxHPgVN/public?id=2024-12-03T03:02:16.056Z",
          content: {
            title: "Asquiento",
            videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/wcV3ZrxclQY?si=t_41s9Q3HCz2xuRT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
          }
        },
        {
          name: "Verguenza",
          emojiUrl: "https://imagedelivery.net/ZMsc4Rh1AHFp0qz_tfBn9w/png_37--MLjHf16R2mdG3_n2H/public?id=2024-12-03T03:05:26.897Z",
          content: {
            title: "Avergonzado",
            videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZEKVuw0TxxM?si=rb7BZMpYQjwxuMv8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
          }
        },    
        {
          name: "Tristeza",
          emojiUrl: "https://imagedelivery.net/ZMsc4Rh1AHFp0qz_tfBn9w/png_15--X_ooad_N8MnvAljvz/public?id=2024-12-03T03:05:59.634Z",
          content: {
            title: "Triste",
            videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/lRIMV4TI1yo?si=DT77Lh_oMJL8MHBl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
          }
        },
        {
          name: "Frustración",
          emojiUrl: "https://imagedelivery.net/ZMsc4Rh1AHFp0qz_tfBn9w/png_42--8RFUowp1ylR11ohmn/public?id=2024-12-03T03:04:12.250Z",
          content: {
            title: "Frustrado",
            videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mlFeCAIqfGY?si=pHGLOp_l3oaB5xkK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
          }
        },
        {
          name: "Miedo",
          emojiUrl: "https://imagedelivery.net/ZMsc4Rh1AHFp0qz_tfBn9w/png_30--XOGznAzs08FZ8Aikj/public?id=2024-12-03T03:13:29.962Z",
          content: {
            title: "Miedoso",
            videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ytiyIpUjWUs?si=FBodvZW2xpt8oCxs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',

          }
        },
        {
          name: "Ansiedad",
          emojiUrl: "https://imagedelivery.net/ZMsc4Rh1AHFp0qz_tfBn9w/png_19--JgpQ6jW2XFW254V8k/public?id=2024-12-03T03:09:14.810Z",
          content: {
            title: "Ansioso",
            videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/D78m9vf4t4A?si=gSJLBKtrhzhAJ0jO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
          }
        },
        {
          name: "Enojo",
          emojiUrl: "https://imagedelivery.net/ZMsc4Rh1AHFp0qz_tfBn9w/png_34--gkc_QtiSp_2ffOSly/public?id=2024-12-03T03:12:55.401Z",
          content: {
            title: "Enojado",
            videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/daPxZoWU-iE?si=UnEAWbzRGy8rZcez" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',

          }
        }
        
  ]

  return emotions;

  // return $fetch('https://fakestoreapi.com/products')
  // https://672dfaf3fd897971564485cb.mockapi.io/api/

})