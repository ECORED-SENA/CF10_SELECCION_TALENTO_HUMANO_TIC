<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 6
      h1 Informe sobre candidatos
    
    .row.bg-tema6.mb-5
      .col-lg-12.px-lg-5.px-4.py-4
        .row.align-items-center.p-2.py-4.p-md-0.py-md-0
          .col-md-6(data-aos="fade-right").mb-4.mb-md-0
            p Las personas no seleccionadas se podrán tener en cuenta para otros procesos, por lo que de acuerdo con las políticas de la organización se les informará de manera escrita los resultados del proceso, agradeciendo su participación, especificando el estado en el que quedó la hoja de vida frente al proceso de selección para el cargo, en este proceso se tiene en cuenta la autorización que el candidato realiza a través del consentimiento informado en el cumplimento de la Ley Habeas data.
            .row
              .col-auto.disp-none
                img(src='@/assets/curso/temas/deco-morada.svg' alt='Decoración')
              .col
                p.mb-0.text-morado De igual forma se presenta un informe al cliente interno en forma de matriz de todos los postulantes que inician el proceso de selección, teniendo en cuenta el análisis realizado de hoja de vida vs perfil de la búsqueda, como por ejemplo, una matriz de preselección, como se muestra en la siguiente imagen.
          .col-md-6(data-aos="fade-left")
            img(src='@/assets/curso/temas/tema6/img.png' alt='Imagen decorativa')
        
    .row.justify-content-center
      .col-md-11
        .titulo-sexto.color-naranja(data-aos="fade-right") 
          p.mb-0.text-small <b>Figura 4.</b> Matriz de preselección
        figure.mb-5
          img(src='@/assets/curso/temas/tema6/fig-4.svg', alt='Matriz de preselección')



</template>

<script>
export default {
  name: 'Tema6',
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
