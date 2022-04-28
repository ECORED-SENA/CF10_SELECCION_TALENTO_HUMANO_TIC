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
        p.mb-0 Las tecnologías de la información y las comunicaciones han impactado grandemente la economía de la sociedad del siglo XXI, es por ello que se debe tener en cuenta cómo éstas han influido en la selección del talento humano que requieren las empresas de hoy. Por tal razón, se hace necesario estudiar dicho proceso evolutivo y que tipo de herramientas tecnológicas se están usando en la actualidad. Lo invitamos a ver el siguiente video, el cual le permitirá conocer el contenido a grosso modo de este componente:


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
