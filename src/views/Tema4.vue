<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bg-tema4
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 4
      h1 Recepción y análisis de hojas de vida
    
    .row.bg-tema1.mb-4
      .col-lg-12.px-lg-5.py-lg-3.px-4.py-0
        .row.align-items-center.p-2.py-0.p-md-0.py-md-0
          .col-md-5(data-aos="fade-right").mb-4.mb-md-0
            img(src='@/assets/curso/temas/tema4/img.png' alt='Imagen decorativa')
          .col-md-7(data-aos="fade-left").mb-4.mb-md-0
            p La Hoja de Vida (HV) o Curriculum Vitae (CV) es la carta de presentación que hace el candidato a la empresa que lo está requiriendo, por lo que es una oportunidad para continuar avanzando en el proceso, o por el contrario ser descartado del mismo, porque no cumple con las competencias requeridas para el cargo, este es un documento esencial que permite obtener información del candidato y evaluar su idoneidad dentro del proceso.
            .cajon.color-acento-botones.neg--x.p-4.mb-4
              p.mb-0 El siguiente video nos presenta la recepción de las hojas de vida, su análisis, evaluación, selección para entrevista y pruebas psicotécnicas, con el fin de presentar desde la oficina de recursos humanos un reporte de los dos o tres seleccionados que serán presentados al área que solicitó el proceso y quienes al final tomaran la decisión final.
            
    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.bg-tema4-2.mb-4
      .col-lg-12.px-lg-5.py-lg-3.px-4.py-0
        .row
          .col-md-8(data-aos="fade-right").mb-4.mb-md-0
            p Para ampliar la información, lo invitamos a leer el artículo 
              span.text-azul Cómo identificar una buena hoja de vida en 8 pasos, el cual se encuentra en el material complementario.
            .row.mb-4
              .col-auto.disp-none.ps-md-5
                img(src='@/assets/curso/temas/deco-morada-gris.svg' alt='Decoración')
              .col
                h5.text-morado.mb-0 Una sugerencia que le damos es que para leer muchos CV, lo primero que se debe hacer es partir de los requisitos excluyentes y los no excluyentes, ejercicio que le permitirá clasificar las hojas de vida teniendo en cuenta los criterios de Sí cumple, No cumple y las inciertas, por lo anterior, en un segundo análisis, hojas de vida de este tercer grupo pueden ser incluidas o no dentro del proceso de selección. 
            .cajon.color-acento-botones.neg--right.p-4
              p.mb-0 Para los casos en que se recibe un alto volumen de hojas de vida, se recomienda utilizar los Sistemas de Seguimiento a Candidatos, en inglés <b>Aplicant Tracking Systems (ATS)</b> software que ayuda a filtrar la información recibida del aspirante.
          .col-md-4(data-aos="fade-left").px-3
            img(src='@/assets/curso/temas/tema4/img2.png' alt='Imagen decorativa')  
            
    .row
      .col-auto.disp-none
        img(src='@/assets/curso/temas/deco-horiz-azul.svg' alt='Decoración')
      .col
        h5.mb-0 
          span.text-azul Para complementar el estudio de este tema, lo invitamos a leer el artículo 
          | Qué son y para qué sirven los ATS, 
          span.text-azul que se encuentra ubicado en el material complementario.


</template>

<script>
export default {
  name: 'Tema4',
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
