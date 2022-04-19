<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 3
      h1 Convocatoria
    
    .row.bg-tema7.mb-4
      .col-lg-12.px-lg-5.py-lg-4.px-4.py-0
        .row.align-items-center.p-2.py-0.p-md-0.py-md-0.mb-3
          .col-md-4(data-aos="fade-right").mb-4.mb-md-0
            img(src='@/assets/curso/temas/tema3/img.png' alt='Imagen decorativa')
          .col-md-8(data-aos="fade-left").mb-4.mb-md-0
            .row.align-items-start
              .col-auto.disp-none
                img(src='@/assets/curso/temas/deco-azul.svg' alt='Decoración')
              .col
                p.text-azul Una vez sea aprobada la requisición de personal y hacer el análisis del perfil del cargo, el siguiente paso a ejecutar es el reclutamiento de los candidatos que participaran en el proceso de selección. A través de este proceso se llevarán a cabo una serie de pasos orientados a atraer los candidatos que, de acuerdo con el perfil de búsqueda, se consideren los más calificados para ocupar el cargo dentro de la organización. 
            p El proceso de reclutamiento despliega la información a nivel interno y/o externo, que permite a la empresa, dar a conocer su necesidad u oportunidad de empleo, en el mercado laboral. Este procedimiento recibe el nombre de convocatoria, la cual, debe atraer los suficientes candidatos para analizar sus hojas de vida y suministrar los más opcionados al cliente, para cumplir con el perfil buscado, que lleve al éxito la contratación.
            p Para tener en cuenta: 
        .row.justify-content-center.mb-5(data-aos="fade-down")
          .col-md-12
            .row.align-items-center.ms-md-5.bg-1.px-4.py-3
              .col-auto.disp-none
                img(src='@/assets/curso/temas/deco-azul-blanco.svg' alt='Decoración')
              .col
                p.mb-0 La  redacción de la convocatoria debe contener varios aspectos que hacen parte del perfil de búsqueda, para ello deben especificarse de manera clara los requisitos excluyentes y los no excluyentes. 



</template>

<script>
export default {
  name: 'Tema3',
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
