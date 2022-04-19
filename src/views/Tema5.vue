<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 5
      h1 Evaluación de antecedentes

    .row.bg-tema5.mb-4
      .col-lg-12.px-lg-5.py-lg-3.px-4.py-0
        .row
          .col-md-8(data-aos="fade-right").mb-4.mb-md-0
            p La revisión de los antecedentes permite identificar quiénes son los mejores candidatos para continuar a la fase de selección propiamente dicha, implica aplicación de filtros que pueden ser a través de la Internet o Intranet, como: cuestionarios on line o preguntas específicas sobre conocimiento y experiencia, consulta previa al proceso de selección, con el objetivo de descartar o incluir a los candidatos idóneos para el cargo requerido, esta verificación optimiza costos y tiempo.
            .row.mb-3
              .col-auto.disp-none.ps-md-1
                img(src='@/assets/curso/temas/deco-morada-gris.svg' alt='Decoración')
              .col
                h5.text-morado.mb-0 Parte de esta evaluación de antecedentes se hace a través de las redes sociales, las cuales aportan información para los reclutadores sobre la manera que tiene el postulante de relacionarse con otros, la forma en que expresa sus ideas u opiniones, etc., lo cual ayuda a apreciar las diferentes dimensiones del candidato a considerar. Si el candidato las reseña en su hoja de vida, es buen indicio. Los perfiles que normalmente se consultan son LinkedIn, Twitter, Instagram, Facebook.
          .col-md-4(data-aos="fade-left").px-3
            img(src='@/assets/curso/temas/tema5/img.png' alt='Imagen decorativa')  
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-11.bg-1.px-4.py-3
        .row.align-items-center
          .col-auto.disp-none
            img(src='@/assets/curso/temas/deco-azul-blanco.svg' alt='Decoración')
          .col
            p.mb-0 En este punto es necesario tener presente, la Ley 1581 de 2012 y el Decreto 1377 de 2013, que desarrolla el derecho constitucional que tienen todas las personas a conocer, suprimir, actualizar y rectificar los datos personales recolectados, almacenados o que hayan sido objeto de tratamiento en bases de datos en las entidades públicas y privadas, mediante consultas y reclamos ante las entidades y la Superindustria.
    
    .row.bg-tema5-1
      .col-lg-12.px-lg-5.px-4.pb-0
        .row.bg-tema5-2.mb-4
          .col-lg-12.px-lg-5.py-lg-3.px-4.py-0
            .row.p-2.py-0.p-md-0.py-md-0
              .col-md-4(data-aos="fade-right").mb-4.mb-md-0
                img(src='@/assets/curso/temas/tema5/img2.png' alt='Imagen decorativa')
              .col-md-8(data-aos="fade-left").mb-4.mb-md-0
                p La ley mencionada en el párrafo anterior, obligó a las empresas a tomar la decisión de generar un documento de consentimiento para todos los candidatos que participen en un proceso de selección y prevenir posibles demandas ante el uso de la información que se recibe a través de la hoja de vida y otros. 
                .cajon.color-acento-botones.neg--x.p-4.mb-4
                  p.text-azul.mb-0 Lo invitamos a revisar los siguientes enlaces, los cuales le permitirán profundizar el tema y tener un criterio claro frente al uso de los datos de los postulantes.
                .tarjeta.dg-azul.p-3.py-lg-3.mb-3(data-aos="fade-down")
                  .row.justify-content-around.align-items-center
                    .col-7.col-sm-2.col-lg-2.px-lg-4
                      img(src="@/assets/curso/temas/tema5/ico.svg")
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0.text-white
                          h4.mb-1 Ley 1581 2012 protección de datos
                          p.text-small.mb-0 Por la cual se dictan disposiciones generales para la protección de datos personales. 
                        .col-sm-auto.px-lg-4
                          a.boton.color-acento-botones(href="https://sena-globallex-info.bdigital.sena.edu.co/normativa/detalle/ley-1581-de-2012-24760/pdf" target="_blank")
                            span Descargar
                            i.fas.fa-file-download
                .tarjeta.dg-azul.p-3.py-lg-3(data-aos="fade-down")
                  .row.justify-content-around.align-items-center
                    .col-7.col-sm-2.col-lg-2.px-lg-4
                      img(src="@/assets/curso/temas/tema5/ico.svg")
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0.text-white
                          h4.mb-1 Decreto 1377 de 2013
                          p.text-small.mb-0 Por el cual se reglamenta la Ley 1581.
                        .col-sm-auto.px-lg-4
                          a.boton.color-acento-botones(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=53646" target="_blank")
                            span Descargar
                            i.fas.fa-file-download            



        p.mb-4(data-aos="fade") Teniendo en cuenta la reglamentación existente, se hace necesario hacer firmar al postulante una autorización para el uso de datos, por lo que a continuación, se presenta un modelo de autorización de manejo de la información, o consentimiento informado.

        .row.justify-content-center
          .col-md-8
            .titulo-sexto.color-naranja(data-aos="fade-right") 
              p.mb-0.text-small <b>Figura 3.</b> Formato de autorización de manejo de información
            figure.mb-5(data-aos="fade-down") 
              img.mb-4(src='@/assets/curso/temas/tema5/fig.svg', alt='Formato de autorización de manejo de información')




</template>

<script>
export default {
  name: 'Tema5',
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
