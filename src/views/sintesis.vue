<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-center 
      .col-lg-12
        .row.mb-5   
          .col-lg-8   
            .titulo-sexto.color-acento-botones
              h3 Gestión del desarrollo administrativo e innovación
              p.mb-0 Síntesis: Estructura de documentos
          .col-lg-4
              figure.mb-5
                img.img-86(src='@/assets/curso/temas/logo-sena.svg')              
    br 
    br
    p.mb-5 Estimado aprendiz, lo invitamos a revisar una síntesis de lo abordado en este componente formativo.
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis-1.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
