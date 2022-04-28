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
        .row.mb-5    
          .col-md-12(data-aos="fade-down")
            SlyderF(columnas="col-lg-3 col-xl-3")
              .tarjeta.bx-shadow.bg-white.p-4.px-2
                .row.justify-content-center.mb-4
                  .col-6
                    img(src='@/assets/curso/temas/tema2/slide1.svg' alt='AvatarTop')
                p.text-center.mb-0 Las funciones
              .tarjeta.bx-shadow.bg-white.p-4.px-2
                .row.justify-content-center.mb-4
                  .col-6
                    img(src='@/assets/curso/temas/tema2/slide2.svg' alt='AvatarTop')
                p.text-center.mb-0 Método de trabajo
              .tarjeta.bx-shadow.bg-white.p-4.px-2
                .row.justify-content-center.mb-4
                  .col-6
                    img(src='@/assets/curso/temas/tema2/slide3.svg' alt='AvatarTop')
                p.text-center.mb-0 Tiempo para la realización de cada tarea
              .tarjeta.bx-shadow.bg-white.p-4.px-2
                .row.justify-content-center.mb-4
                  .col-6
                    img(src='@/assets/curso/temas/tema2/slide4.svg' alt='AvatarTop')
                p.text-center.mb-0 Responsabilidades  
              .tarjeta.bx-shadow.bg-white.p-4.px-2
                .row.justify-content-center.mb-4
                  .col-6
                    img(src='@/assets/curso/temas/tema2/slide5.svg' alt='AvatarTop')
                p.text-center.mb-0 Lugar donde se ejecutan las actividades
              .tarjeta.bx-shadow.bg-white.p-4.px-2
                .row.justify-content-center.mb-4
                  .col-6
                    img(src='@/assets/curso/temas/tema2/slide6.svg' alt='AvatarTop')
                p.text-center.mb-0 Recursos que el cargo requiere
              .tarjeta.bx-shadow.bg-white.p-4.px-2
                .row.justify-content-center.mb-4
                  .col-6
                    img(src='@/assets/curso/temas/tema2/slide7.svg' alt='AvatarTop')
                p.text-center.mb-0 La razón de ser de la existencia del cargo    
        
        .row
          .col-md-7(data-aos="fade-right").mb-4.mb-md-0
            .cajon.color-secundario.neg--right.p-4.mb-4
              p.mb-0 Adicional a lo anterior, el perfil se construye a partir de la descripción del cargo, donde se especifican las características particulares, que permiten realizar la descripción de la persona que puede ocupar el cargo, detallado en la descripción del puesto.
            p Para la revisión de este perfil, se debe tener en cuenta que contenga los siguientes aspectos esenciales: 
            .row.space-4columns.justify-content-center
              .col-md-3.text-center.tarjeta.bx-shadow.bg-white.p-4.px-2.mb-3.mx-2
                .row.justify-content-center.mb-3
                  .col-5.col-md-7
                    img(src='@/assets/curso/temas/tema2/ico1.svg' alt='AvatarTop')
                h5.mb-0 Conocimiento
              .col-md-3.text-center.tarjeta.bx-shadow.bg-white.p-4.px-2.mb-3.mx-2
                .row.justify-content-center.mb-3
                  .col-5.col-md-7
                    img(src='@/assets/curso/temas/tema2/ico2.svg' alt='AvatarTop')
                h5.mb-0 Experiencia
              .col-md-3.text-center.tarjeta.bx-shadow.bg-white.p-4.px-2.mb-3.mx-2
                .row.justify-content-center.mb-3
                  .col-5.col-md-7
                    img(src='@/assets/curso/temas/tema2/ico3.svg' alt='AvatarTop')
                h5.mb-0 Habilidades o destrezas
              .col-md-3.text-center.tarjeta.bx-shadow.bg-white.p-4.px-2.mb-3.mx-2
                .row.justify-content-center.mb-3
                  .col-5.col-md-7
                    img(src='@/assets/curso/temas/tema2/ico4.svg' alt='AvatarTop')
                h5.mb-0 Actitudes de la persona que pueda desempeñar el cargo    
          .col-md-5(data-aos="fade-left").px-md-5.px-3
            img(src='@/assets/curso/temas/tema2/img2.png' alt='Imagen decorativa')

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-11.bg-1.px-4.py-3
        .row
          .col-auto.disp-none
            img(src='@/assets/curso/temas/deco-azul.svg' alt='Decoración')
          .col
            p.mb-0 Partiendo de estos aspectos, se podrá tener claridad de los requisitos que necesita evidenciar el candidato, para hacer el ejercicio de comparar el perfil de búsqueda con el perfil que posee el candidato. Por otro lado, usualmente se definen requisitos excluyentes y no excluyentes, así como las competencias requeridas para la posición.

    .row.bg-tema2-2.mb-3
      .col-lg-12.px-lg-5.py-lg-4.px-4.py-0
        .row.align-items-center.p-2.py-0.p-md-0.py-md-0
          .col-md-4(data-aos="fade-right").mb-4.mb-md-0
            img(src='@/assets/curso/temas/tema2/img3.png' alt='Imagen decorativa')
          .col-md-8(data-aos="fade-left").mb-4.mb-md-0
            .row.align-items-start
              .col-auto.disp-none
                img(src='@/assets/curso/temas/deco-azul.svg' alt='Decoración')
              .col
                p.text-azul Cuando se habla de elementos excluyentes, se refiere a los requisitos mínimos (imprescindibles), que debe poseer un postulante en relación con el perfil de búsqueda requerido por la empresa, es decir, son aquellos que es necesario que el candidato tenga para poder ser tenido en cuenta dentro del proceso y cuando se habla de elementos no excluyentes son aquellos que son deseables, pero, si el candidato no los posee, puede poner en peligro la continuación en el proceso.
            p Llegados a este punto, se puede decir que la descripción del cargo y el perfil no son lo mismo y es siempre necesario antes de iniciar un proceso de reclutamiento, verificar si es necesario hacer ajustes al perfil de acuerdo con la solicitud hecha por el cliente interno, por lo que es de relevancia hacer el análisis de la solicitud o requisición que hace el área solicitante.

    .cajon.color-acento-botones.sdo-amarillo.p-4.mb-5(data-aos="fade-down")
      p.mb-0 Al mismo tiempo se debe contemplar la tendencia actual en relación con el tema en cuestión, como es la capacidad de las personas para realizar diferentes tareas similares dentro de un mismo entorno; el perfil del cargo no debe ser ajeno y debe permitir la suficiente flexibilidad para que se vayan haciendo los ajustes que se requieren de acuerdo con los cambios a nivel mundial, por lo que se debe propiciar además el enriquecimiento del desempeño, ya sea horizontal o vertical.

    .row.bg-tema2-3
      .col-lg-12.px-lg-5.px-4.pb-0
        .row.justify-content-center.mb-4
          .col-md-12  
            .row.mb-5.justify-content-center
              .col-lg-12
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/temas/tema2/img4.png' alt='Banner')
              .col-lg-9.dg-gris.tarjeta.neg--top.p-4(data-aos="fade")   
                p.mb-0 El inicio del reclutamiento se hace a partir de la claridad en el perfil de la búsqueda. La estructura del cargo tiene que ver con el sistema de trabajo de la empresa; siendo así, es definitivo identificar los flujos o procesos de trabajo, debido a que son estos los que dan lugar a los distintos puestos dentro de la estructura de cargo, derivando de esta forma, los perfiles de cargo, tal como se presenta a continuación:

          .col-md-10
            .titulo-sexto.color-naranja(data-aos="fade-right") 
              p.mb-0.text-small <b>Figura 2.</b> Representación gráfica del perfil del cargo 
            figure.mb-5(data-aos="fade-down") 
              img.mb-4(src='@/assets/curso/temas/tema2/fig.svg', alt='Representación gráfica del perfil del cargo ') 
              figcaption <b>Nota.</b> Tomado de Cuesta A. (2016)

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-11.bg-1.px-4.py-3
        .row.align-items-center
          .col-auto.disp-none
            img(src='@/assets/curso/temas/deco-azul-blanco.svg' alt='Decoración')
          .col
            p.mb-0 Para concluir, es necesario que luego de hacer la revisión del perfil del cargo, junto con el documento de requisición, se determinen los elementos excluyentes y no excluyentes, insumo importante para el momento en que se lleve a cabo la convocatoria.


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
