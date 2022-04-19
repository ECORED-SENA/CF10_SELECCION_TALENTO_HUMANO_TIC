<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Requisición
    
    .row.bg-tema1.mb-4
      .col-lg-12.px-lg-5.py-lg-4.px-4.py-0
        .row.align-items-center.p-2.py-0.p-md-0.py-md-0
          .col-md-5(data-aos="fade-right").mb-4.mb-md-0
            img(src='@/assets/curso/temas/tema1/img.png' alt='Imagen decorativa')
          .col-md-7(data-aos="fade-left").mb-4.mb-md-0
            p En el área de talento humano se requieren herramientas sencillas y eficientes, que permitan obtener y entregar información. Una de estas herramientas es la requisición, la cual como en la mayoría de los asuntos relacionados con el personal, es asumida por el jefe inmediato del área donde se genera la vacante, quien a su vez tiene participación dentro del proceso de selección que se inicia.
            .cajon.color-acento-botones.neg--x.p-4.mb-4
              p.mb-0 Por lo anterior, la oficina de talento humano debe proveer a sus clientes internos de un documento formal para este requerimiento, dando paso al reclutamiento de personal; el formato debe contener las especificaciones del cargo que requiere con sus respectivas autorizaciones. Cuando el área recibe la requisición, pasa a la siguiente etapa, revisión o creación del perfil y de esta manera se da inicio al reclutamiento.
            .dg-morado.fit-content.p-2
              h4.text-white.mb-0 Este proceso puede generarse por los siguientes escenarios: 

    .row.justify-content-center
      .col-md-10.mb-5(data-aos="fade-down")
        figure 
          img(src='@/assets/curso/temas/tema1/infog.svg', alt='Excenarios')

    .tarjeta.dg-azul.p-3.py-lg-2.mb-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-7.col-sm-2.col-lg-2.px-lg-4
          img(src="@/assets/curso/temas/tema1/ico.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.text-white
              h4.mb-1 Formato de requisición de personal
              p.text-small.mb-0 A continuación, se presenta un formato de requisición de personal, en el cual se incluyen las exigencias que forman parte del reclutamiento. Este documento debe ser autorizado por quien haya sido considerado dentro de la política de selección, por lo cual debe socializarse y estar disponible para ser utilizado por todos los jefes de área.
            .col-sm-auto.px-lg-4
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Formato_Requisicion.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .row.align-items-center.mb-4.mb-lg-3(data-aos="fade")
      .col-auto.disp-none
        img(src='@/assets/curso/temas/deco-horiz.svg' alt='Decoración')
      .col
        p.mb-0 Los aspectos que se deben tener en cuenta para el 
          span.text-morado correcto diligenciamiento de una requisición
          |, son:

    .row.bg-tema1-1
      .col-lg-12.px-lg-5.px-4.pb-lg-5.pb-0
        .row.align-items-center
          .col-md-7(data-aos="fade-right").mb-4.mb-md-0
            LineaTiempoD.color-acento-botones
              p.mb-0(numero="1" titulo="Fecha de solicitud") Fecha en que se genera la vacante, la cual debe ser diligenciada por el jefe inmediato o cliente interno.
              p.mb-0(numero="2" titulo="Fecha de recepción") Se refiere a la fecha en que se recibe y debe ser diligenciada por Talento Humano. 
              p.mb-0(numero="3" titulo="Nombre del cargo") Denominación de vacante generada. 
              p.mb-0(numero="4" titulo="Nombre de la dependencia") Área que genera la vacante.
          .col-md-5(data-aos="fade-left").px-md-5.px-3
            img(src='@/assets/curso/temas/tema1/img2.png' alt='Imagen decorativa')




  
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
