<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión documental
    
    .row.justify-content-between.mb-5
      .col-md-6.col-lg-4

          figure
            img(src='@/assets/curso/temas/tema3/img-1.png')

      .col-md-6.col-lg-8
        p.mb-5 Continuemos con el proceso de gestión documental, conocido también como gestión de documentos, el cual, es un conjunto de normas técnicas y prácticas que se utilizan para administrar documentos de todo tipo, los que se reciben y los que se generan en una organización; este proceso busca facilitar la recuperación de la información en el momento en que se requiera y, además, es útil al determinar el tiempo que los documentos deben custodiarse, suprimirse y, en el caso de los más valiosos, asegurarse de su conservación a largo plazo, aplicando los principios de simplificación y economía.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10

        .cajon.color-acento-botones.p-4
          h3 Entonces, ¿qué es un documento?
          p Un documento se define como la demostración o testimonio material de una acción que un individuo físico o jurídico, una institución, asociación, etc., que puede ser pública o privada, lleva a cabo como conclusión del ejercicio de sus actividades y obligaciones y que podrá ser expresado en una unidad de información que contemple cualquier soporte, papel, cinta, disco magnético, película y fotografía, con el objeto de conservarlo en el tiempo, en caso de precisarlo para mostrarlo como prueba, recuerdo o legado a alguien. (Definición ABC, s.f.)


    p.mb-5 En la actualidad, se puede encontrar una gran variedad de sistemas de gestión documental: desde el simple registro manual de la correspondencia, hasta los más sofisticados sistemas informáticos que manejan no solo la documentación administrativa sino que, además, controlan los flujos de trabajo del proceso de tramitación de los expedientes, capturan información desde bases de datos de producción, contabilidad y otros, enlazan con el contenido de archivos, bibliotecas, centros de documentación y permiten realizar búsquedas sofisticadas y recuperar información de cualquier lugar.

    p.mb-5 Como ya se indicó, en el proceso de gestión documental, se encuentran diferentes tipos de documentos que, en la mayoría de los casos, se refieren al análisis y evaluación de las siguientes actividades:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
      .row(titulo="Almacenamiento")
        .col-md-2.mb-4.mb-md-0
          figure
            img.img-100(src='@/assets/curso/temas/tema3/img-2.svg')
             
        .col-md-10

          p ¿Dónde se guardan los documentos?
      .row(titulo="Recuperación")
        .col-md-2.mb-4.mb-md-0
          figure
            img.img-100(src='@/assets/curso/temas/tema3/img-3.svg')
             
        .col-md-10

          p ¿Cómo encontrar los documentos necesarios? ¿Cuánto tiempo puede demorar la búsqueda de un documento? ¿Qué opciones tecnológicas están disponibles para la recuperación?
      .row(titulo="Clasificación")
        .col-md-2.mb-4.mb-md-0
          figure
            img.img-100(src='@/assets/curso/temas/tema3/img-4.svg')
             
        .col-md-10
       
          p ¿Cómo organizar los documentos? ¿Cómo asegurar que los documentos se archiven siguiendo el sistema más apropiado?
      .row(titulo="Seguridad")
        .col-md-2.mb-4.mb-md-0
          figure
            img.img-100(src='@/assets/curso/temas/tema3/img-5.svg')
             
        .col-md-10
      
          p ¿Cómo evitar la pérdida de documentos, la violación de la información o la destrucción no deseada de documentos?
      .row(titulo="Custodia")
        .col-md-2.mb-4.mb-md-0
          figure
            img.img-100(src='@/assets/curso/temas/tema3/img-6.svg')
             
        .col-md-10
      
          p ¿Cómo decidir qué documentos conservar? ¿Por cuánto tiempo deben ser guardados? ¿Cómo proceder con su eliminación?
      .row(titulo="Distribución")
        .col-md-2.mb-4.mb-md-0
          figure
            img.img-100(src='@/assets/curso/temas/tema3/img-7.svg')
             
        .col-md-10
      
          p ¿Cómo distribuir documentos a la gente que los necesita? ¿Cuánto puede demorarse la distribución de los documentos?
      .row(titulo="<em>Workflow</em> o flujo de trabajo")
        .col-md-2.mb-4.mb-md-0
          figure
            img.img-100(src='@/assets/curso/temas/tema3/img-8.svg')
             
        .col-md-10

          p Cuando los documentos deben pasar de una persona a otra, ¿cuáles son las normas para el flujo de estos documentos?
      .row(titulo="Creación")
        .col-md-2.mb-4.mb-md-0
          figure
            img.img-100(src='@/assets/curso/temas/tema3/img-9.svg')
             
        .col-md-10

          p Si más de una persona se encuentra implicada en la creación o modificación de un documento, ¿cómo se podrá ayudar con esas tareas?
      .row(titulo="Autenticación")
        .col-md-1.mb-4.mb-md-0
          figure
            img.img-100(src='@/assets/curso/temas/tema3/img-9-.svg')
             
        .col-md
        
          p ¿Cómo proporcionar los requisitos necesarios para la validación legal, al gobierno y a la industria privada, sobre la originalidad de los documentos y cumplir los estándares para su autentificación?

    ul.lista-ul--color.mor.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Tipos de documentos          
     
    p Así mismo, encontramos distintos tipos de documentos, entre los que sobresalen:
    p.mb-5 A continuación, se presentan cada uno de ellos.     
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        ImagenInfografica.color-acento-botones.mb-5.btn-w
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img-10.svg', alt='Texto que describa la imagen')
          .tarjeta.color-acento-contenido.p-4.px-5(x="45.3%" y="5.3%" numero="+")
  
            p Son los que se fundamentan en el lenguaje escrito, o sea que contienen información sobre algún aspecto. En este rango de documentos se encuentran libros, revistas, actas de nacimiento y matrimonio, historiales médicos y académicos, etc. 

          .tarjeta.color-acento-contenido.p-4.px-5(x="83.6%" y="37.8%" numero="+")

            p Son los que se almacenan en algún soporte magnetofónico o registran y almacenan sonido. Por lo tanto, se habla de los que se fundamentan, en el lenguaje oral o en sonidos, como son algunas obras musicales. Para grabarlos, se necesita de algún medio tecnológico como una grabadora de sonidos, no ocupan mucho espacio y pueden ser cintas, música, entrevistas, historias de vida, etc.

          .tarjeta.color-acento-contenido.p-4.px-5(x="83.6%" y="65.2%" numero="+")
     
            p Son los que se fundamentan en imagen y sonido, y se almacenan en cintas. Se trata de videos donde se registra algún evento con ayuda de una cámara de video. Ejemplos de estos documentos son las películas, la programación que emiten las televisoras, videos caseros, etc.

          .tarjeta.color-acento-contenido.p-4.px-5(x="46%" y="94.3%" numero="+")

            p Son fotografías que se han tomado con la utilización de cualquier tipo de técnica, sea análoga o digital. Las fotografías, al igual que los demás documentos, comunican un mensaje o información que se relaciona con algún evento o situación concreta.

          .tarjeta.color-acento-contenido.p-4.px-5(x="11.3%" y="71.8%" numero="+")

            p Los documentos se pueden almacenar de forma digital y hoy en día se crean documentos textuales usando procesadores de texto, se graban sonidos a través de la computadora y se toman fotografías con cámaras digitales. Este tipo de almacenamiento se está popularizando, con la gran ventaja que no ocupan espacio físico.

          .tarjeta.color-acento-contenido.p-4.px-5(x="11%" y="49%" numero="+")

            p Se refiere a los documentos expedidos o autorizados por funcionario público y que dan fe de su contenido, por sí mismos.

          .tarjeta.color-acento-contenido.p-4.px-5(x="11.5%" y="25.2%" numero="+")

            p Se refiere a los documentos realizados entre particulares, en los que no ha intervenido ningún funcionario público.


    p.mb-5 Ahora bien, en el proceso de gestión documental, también se presenta una clasificación de documentos por sus características:

    ul.lista-ul--color.mb-5
      li 
        i.fas.fa-circle.text-small 
        p <b>Según el mensaje informativo o forma de expresión del contenido:</b> los documentos textuales y los no textuales, o por la transformación del contenido, se clasifican en documentos primarios, secundarios y terciarios.
      li 
        i.fas.fa-circle.text-small 
        p <b>Según la posibilidad o forma de transmisión o difusión:</b> desde el punto de vista social, se habla de documentos públicos, reservados e inéditos y, desde el punto de vista temporal, de documentos periódicos o no periódicos, o sea de naturaleza monográfica.
      li 
        i.fas.fa-circle.text-small 
        p <b>Según el soporte material:</b> documentos de papel, (libros, revistas, folletos, etc.), material químico (películas), material magnético (cintas de video, <i>disquette</i> de ordenador, <i>cassettes</i>, etc.), soportes ópticos (CD-ROM, DVD, video, discos, etc.), entre otros.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10

        .cajon.color-acento-botones.p-4
          h3 Políticas de la gestión documental en Colombia
          p.mb-5 La política de gestión documental en el Estado colombiano, acorde con el artículo 6 del Decreto 2609 de 2012, debe ser entendida como el conjunto de directrices establecidas, por una entidad, para tener un marco conceptual claro para la gestión de la información física y electrónica, un conjunto de estándares para la gestión de la información en cualquier soporte, una metodología general para la creación, uso, mantenimiento, retención, acceso y preservación de la información, independiente de su soporte y medio de creación, un programa de gestión de información y documentos, una adecuada articulación y coordinación entre las áreas de tecnología, la oficina de archivo, las oficinas de planeación y los productores de la información. (Archivo General de la Nación, s.f.)
          .row 
            .col-lg-7
              a.anexo.mb-4.mb-lg-0(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=50958" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web.</b> Para ampliar la información, lo invitamos a consultar el artículo 6 del Decreto 2609 de 2012.

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
