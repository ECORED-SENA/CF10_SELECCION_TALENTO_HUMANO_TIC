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
