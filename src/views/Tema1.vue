<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Requisición
    
    .row.bg-tema1.mb-5
      .col-lg-12.px-lg-5.px-4.py-4
        .row.align-items-center.p-2.py-4.p-md-0.py-md-0
          .col-md-5(data-aos="fade-right").mb-4.mb-md-0
            img(src='@/assets/curso/temas/tema1/img.png' alt='Imagen decorativa')
          .col-md-7(data-aos="fade-left").mb-4.mb-md-0
            p En el área de talento humano se requieren herramientas sencillas y eficientes, que permitan obtener y entregar información. Una de estas herramientas es la requisición, la cual como en la mayoría de los asuntos relacionados con el personal, es asumida por el jefe inmediato del área donde se genera la vacante, quien a su vez tiene participación dentro del proceso de selección que se inicia.
            .cajon.color-acento-botones.neg--x.p-4.mb-4
              p.mb-0 Por lo anterior, la oficina de talento humano debe proveer a sus clientes internos de un documento formal para este requerimiento, dando paso al reclutamiento de personal; el formato debe contener las especificaciones del cargo que requiere con sus respectivas autorizaciones. Cuando el área recibe la requisición, pasa a la siguiente etapa, revisión o creación del perfil y de esta manera se da inicio al reclutamiento.
            .dg-morado.fit-content.p-2
              h4.text-white.mb-0 Este proceso puede generarse por los siguientes escenarios: 





  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
