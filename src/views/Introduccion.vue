<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white
          i.fas.fa-info
      h1 Introducción

    .row.align-items-center.bg-intro.tarjeta.mb-4.p-2.py-4.p-md-0.py-md-0
      .col-md-4.centrar-imagen(data-aos="fade-right").px-4.mb-4.mb-md-0
        img(src='@/assets/curso/temas/intro-img.png' alt='Introducción')
      .col-md-7.py-0.py-md-3(data-aos="fade-left")
        p.mb-0 Para poder adquirir conocimientos y habilidades en la atención de los clientes, sea de una organización dedicada a la producción o comercialización, es necesario identificar el contexto de esa organización tanto de sus aspectos externos, como de los recursos y procesos internos; en ese 
          span.text-morado orden de ideas lo que hallará en este espacio quiere capturar su plena atención frente a los aspectos que se deben conocer de manera cada vez más concreta, según el tipo de organización que se quiera analizar o donde se pretenda prestar un servicio. 
          | A continuación, se presenta un video que recoge la generalidad del presente componente:


    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
