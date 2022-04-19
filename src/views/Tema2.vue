<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Análisis o creación del perfil del cargo


    .row.justify-content-center.mb-5
      .col-md-12  
        .row.mb-5.justify-content-center
          .col-lg-12
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/tema2/banner.png' alt='Banner')
          .col-lg-9.dg-gris.tarjeta.neg--top.p-4(data-aos="fade")   
            p.mb-0 Para enrolar candidatos, según el perfil de competencias y necesidades de la organización, se debe partir de la 
              span.text-morado etapa preparatoria
              |, en la cual se llevan a cabo cada uno de los pasos que se consideran claves para poder seleccionar a la persona más adecuada para un cargo, y estos son:

    .row.justify-content-center
      .col-md-10.mb-5(data-aos="fade-down")
        figure 
          img(src='@/assets/curso/temas/tema2/infog.svg', alt='Análisis Creación perfil')

    .row.bg-tema2.mb-4
      .col-lg-12.px-lg-5.py-lg-4.px-4.py-0
        .row.align-items-center.p-2.py-0.p-md-0.py-md-0
          .col-md-4(data-aos="fade-right").mb-4.mb-md-0
            img(src='@/assets/curso/temas/tema2/img.png' alt='Imagen decorativa')
          .col-md-8(data-aos="fade-left").mb-4.mb-md-0
            .row
              .col-auto.disp-none
                img(src='@/assets/curso/temas/deco-azul.svg' alt='Decoración')
              .col
                p Determinar el perfil de búsqueda es uno de los temas previos a considerar antes de planear el proceso de selección, de igual modo es necesario describir el cargo y asignar las competencias. En algunos casos estos documentos no están actualizados o no existen, en esel caso, el primer paso es hacer la revisión de estos y así tener claridad de la información que se requiere, para ello, se propone generar una lista de chequeo y hacer de manera mucho más efectiva el análisis de las hojas de vida.
            p A partir del análisis o diseño de los perfiles y de acuerdo con la situación actual de la organización, se hace la Solicitud de personal o Requisición de personal. 
            .cajon.color-acento-botones.sdo-amarillo.neg--x.p-4.mb-4
              p.mb-0 Ante todo, es fundamental tener la claridad de la información que se consigna en la descripción del cargo o descripción del puesto, en este documento se consigna todo lo concerniente al contenido y las condiciones del puesto de trabajo. Conozca los elementos más importantes que debe tener en cuenta al momento de hacer la requisición de personal:  

    .row.bg-tema2-1
      .col-lg-12.px-lg-5.px-4.pb-lg-5.pb-0
        .row       
          .col-md-12
            SlyderF.mb-5(columnas="col-lg-3 col-xl-3")
              .tarjeta.bx-shadow.bg-white.p-4.px-2
                .row.justify-content-center.mb-4
                  .col-7
                    img(src='@/assets/curso/temas/tema2/slide1.svg' alt='AvatarTop')
                p.text-center.mb-0 Las funciones

              .tarjeta.bx-shadow.bg-white.p-4.px-2
                .row.justify-content-center.mb-4
                  .col-7
                    img(src='@/assets/curso/temas/tema2/slide2.svg' alt='AvatarTop')
                p.text-center.mb-0 Método de trabajo

              .tarjeta.bx-shadow.bg-white.p-4.px-2
                .row.justify-content-center.mb-4
                  .col-7
                    img(src='@/assets/curso/temas/tema2/slide3.svg' alt='AvatarTop')
                p.text-center.mb-0 Tiempo para la realización de cada tarea

              .tarjeta.bx-shadow.bg-white.p-4.px-2
                .row.justify-content-center.mb-4
                  .col-7
                    img(src='@/assets/curso/temas/tema2/slide4.svg' alt='AvatarTop')
                p.text-center.mb-0 Responsabilidades  



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
