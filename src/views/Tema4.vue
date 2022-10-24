<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Documento administrativo
    
    .row.justify-content-between.mb-5
      .col-md-6.col-lg-4

          figure
            img(src='@/assets/curso/temas/tema4/img-1.svg')

      .col-md-6.col-lg-8

        p.mb-3 Se define como el fundamento por el que se concretan las acciones administrativas. El documento administrativo cumple con dos funciones: 
        ul.lista-ul--color.mb-5
          li 
            i.fas.fa-circle.circle
            p.mb-0 Es un instrumento de verificación que permite comprobar el progreso de una actuación administrativa. 
          li 
            i.fas.fa-circle.circle
            p.mb-0 Es un instrumento de comunicación, debido a que los documentos administrativos permiten el cambio del contenido de los actos, a otros instrumentos o unidades de la  administración, o a terceros interesados, ya sean personas jurídicas públicas y privadas, o personas jurídicas naturales. 

    h3.mb-5 Características

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10

        .cajon.color-acento-botones.p-4
          p.mb-4 Para que un documento pueda ser calificado como documento administrativo, debe cumplir con las siguientes particularidades: 
          ol.lista-ol--cuadro
            li.mb-4 
              .lista-ol--cuadro__vineta
                span a.
              | Producir efectos frente a terceros, o en el entorno de la propia administración. 

            li.mb-4  
              .lista-ol--cuadro__vineta
                span b.
              | Ser emitido por un órgano administrativo, quedando descartados todos los documentos escritos o creados por los interesados,como las solicitudes, las alegaciones o los recursos y reclamaciones. 
            li.mb-4  
              .lista-ol--cuadro__vineta
                span c.
              | Su emisión es válida. 
    br
    h3.mb-5 Clases

    .row.justify-content-between.mb-5
      .col-md-6.col-lg-4

          figure
            img(src='@/assets/curso/temas/tema4/img-2.svg')

      .col-md-6.col-lg-8
        p.mb-5 Los documentos administrativos más importantes son aquellos difundidos en el marco del procedimiento administrativo, entendiendo que no son los únicos que pueden ser emitidos por la administración; sirven para reflejar la existencia de un documento anterior, del que el segundo es solo una constatación, denominado copia o certificado administrativo.

    p.mb-5 Teniendo en cuenta lo anterior, los documentos administrativos se clasifican en los grupos que veremos a continuación: 

    .row.m-0.align-items-center.justify-content-between.mb-5

      .col-lg-9
        TabsA.color-acento-contenido.grs
          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="Documentos<br> administrativos")
            p Manifestados en el marco de los tratamientos administrativos. 

          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="Documentos de<br> decisión")
            p Se refiere a los que forman parte de una declaración de voluntad de un órgano administrativo, sobre materias de su competencia. Se clasifican en acuerdos y resoluciones. 

          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="Documentos de <br>transmisión")
            p Son los que comunican la existencia de hechos o acciones a otras personas u órganos. 

          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="Documentos de <br>constancia")
            p Se definen como los que forman parte de una declaración de conocimiento de un órgano administrativo, que tiene la finalidad de fundamentarse en la acreditación de actos, hechos o resultados jurídicos. Se clasifican en actas y certificados.    
              
          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="Documentos de <br>juicio")
            p Son documentos que forman parte de una declaración de juicio de un órgano administrativo, o de una persona física o jurídica pública o privada, sobre cuestionamientos de hecho o de derecho que sean objeto de un procedimiento administrativo.   
              
          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="Documentos<br> administrativos<br> de validación <br>de otro anterior")
            p Son los que cuentan con una explicación de sensatez de un órgano administrativo, o de una persona física o jurídica pública o privada, sobre las cuestiones de hecho o de derecho que sean objeto de un proceso gerencial.     
              
          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="Documentos <br>dictados en<br> el marco de un<br> procedimiento<br> administrativo")
            p Se clasifican en: administrativos de iniciación, administrativos de instrucción; es un documento por el que se mencionan las instrucciones de un proceso administrativo y los administrativos de terminación, que son los que constatan la terminación de un procedimiento administrativo por cualquiera de las causas que reconoce el ordenamiento jurídico.                  
           
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema4/img-3.png')

    br

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.     

</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
