<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Aspectos generales de la contabilidad

    .row.justify-content-between.mb-5
      .col-md-6.col-lg-4

          figure
            img(src='@/assets/curso/temas/tema1/img-1.png')

      .col-md-6.col-lg-8
        p.mb-5 Para comenzar, conozcamos cómo determinar el uso de reglas ortográficas y gramaticales en la elaboración de textos teniendo, como premisa, la intención comunicativa que se espera obtener y, para lograr este objetivo es primordial conocer los detalles y los componentes de esta estructura
          br
          br
          | Se comienza con el conocimiento de la gramática, que puede ser definida como: disciplina cuya estructura tiene como objetivo esencial, estudiar el idioma para identificar y analizar la estructura y función para utilizar correctamente, a partir de unas normas, las características de las palabras y sus accidentes, así como la manera en que se combinan las palabras para formar oraciones y llevar a cabo una actividad de comunicación. 

        .cajon.color-primario.p-4.mb-4.fnd-1
          p Debido a que se presentan varias combinaciones conformadas por elementos lingüísticos, se han definido varias categorías conocidas como categorías gramaticales: agrupación de palabras que comparten ciertas características para denominar conceptos existentes.
          
    p.mb-5 Existen nueve categorías gramaticales que, a continuación, se introducen para ser aprehendidas y estudiadas.          
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.tarjeta--gris.p-4.mb-5.fnd-3.align-items-start
          LineaTiempoC.color-acento-contenido(text-small)
            .row.align-items-start.px-4(titulo="Sustantivo <br>(nombre)")
              .col-md-2.mb-4.mb-md-0.align-items-start
                figure
                  img.img-100(src='@/assets/curso/temas/tema1/img-2.svg', alt='Texto que describa la imagen')
              .col-md-10.align-items-start
                p Palabra que se utiliza para nombrar personas, animales, plantas, cosas, ideas o sentimientos y, para designar realidades físicas y conceptos abstractos. Las clases de sustantivos son: comunes, propios, contables, incontables, abstractos, concretos, colectivos, individuales, animados e inanimados.
            .row.px-4(titulo="Adjetivo")
              .col-md-2.mb-4.mb-md-0
                figure
                  img.img-100(src='@/assets/curso/temas/tema1/img-3.svg', alt='Texto que describa la imagen')
              .col-md-10
                p Complementa el sentido del sustantivo, lo acompaña, le aporta cualidades y características que proporcionan información sobre sus estados o realidades con distintas naturalezas; se dividen en:
                ul.lista-ul--color
                  li 
                    i.fas.fa-circle.circle
                    p.mb-0
                      b Calificativos:
                      |  aportan cualidades, actitudes y estados al sustantivo.
                  li 
                    i.fas.fa-circle.circle
                    p.mb-0
                      b Relacionales:
                      |  crean una relación con el sustantivo y lo clasifican.

            .row.px-4(titulo="Verbo")
              .col-md-2.mb-4.mb-md-0
                figure
                  img.img-100(src='@/assets/curso/temas/tema1/img-4.svg', alt='Texto que describa la imagen')
              .col-md-10
                p Palabra o categoría gramatical que se puede modificar para darle sentido a una acción que realice un individuo, e indica el tiempo en el que tiene lugar la acción. Por ejemplo, en la frase “mañana estaré en el trabajo”, el verbo se define en tiempo futuro. Se dice que se conjuga un verbo cuando se pone el verbo en todas sus formas posibles.
                br
                p Existen tres tipos de conjugaciones de los verbos:
                ul.lista-ul--color
                  li 
                    i.fas.fa-circle.circle
                    p.mb-0 Los que terminan en AR como: cantar, bailar, soñar
                  li 
                    i.fas.fa-circle.circle
                    p.mb-0  Los que terminan en ER como: comer, encender, beber.
                  li 
                    i.fas.fa-circle.circle
                    p.mb-0  Los que terminan en IR como: sentir, vivir, escribir.

            .row.px-4(titulo="Adverbio")
              .col-md-2.mb-4.mb-md-0
                figure
                  img.img-100(src='@/assets/curso/temas/tema1/img-5.svg', alt='Texto que describa la imagen')
              .col-md-10
                p Palabra que modifica o complementa a un verbo, un adjetivo u otro adverbio. Aporta información sobre cantidad, lugar, tiempo, afirmación, negación y duda; en la siguiente tabla se presentan las diferentes clases de adverbios
            .row.px-4(titulo="Determinante")
              .col-md-2.mb-4.mb-md-0
                figure
                  img.img-100(src='@/assets/curso/temas/tema1/img-6.svg', alt='Texto que describa la imagen')
              .col-md-10
                p Palabra que acompaña al sustantivo, lo concreta, determina y aporta información sobre él, o sea que lo actualiza; se recurre a un determinante para identificar referentes (esa casa, aquel día), van delante del sustantivo y toman el género y número, aunque también existen determinantes neutros.
                p.mb-0 
                  b Ejemplo: 
                  | aquel día estaba lloviendo.
            .row.px-4(titulo="Pronombre")
              .col-md-2.mb-4.mb-md-0
                figure
                  img.img-100(src='@/assets/curso/temas/tema1/img-7.svg', alt='Texto que describa la imagen')
              .col-md-10
                p Palabra que se utiliza para hacer las funciones de un nombre, o incluso sustituirlo, varía en género, número y persona. Las clases de pronombres se pueden observar en la figura a continuación.

                .tarjeta.p-3.mb-5.fnd-7.px-4
                  .row.justify-content-around.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Clases de pronombres y ejemplos
             
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/Clases de pronombres y ejemplos.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download


            .row.px-4(titulo="Preposición")
              .col-md-2.mb-4.mb-md-0
                figure
                  img.img-100(src='@/assets/curso/temas/tema1/img-8.svg', alt='Texto que describa la imagen')
              .col-md-10
                p Palabra que se utiliza para indicar la relación que tienen dos o más palabras entre sí; introduce complementos con los que se forma un enlace entre diferentes palabras o grupos de palabras. Las preposiciones utilizadas en nuestra lengua castellana son: a, ante, bajo, cabe, con, contra, de, desde, durante, en, entre, hacia, hasta, mediante, para, por, según, sin, so, sobre, tras.
            .row.px-4(titulo="Conjunción")
              .col-md-2.mb-4.mb-md-0
                figure
                  img.img-100(src='@/assets/curso/temas/tema1/img-9.svg', alt='Texto que describa la imagen')
              .col-md-10
                p Palabra que sirve para establecer uniones entre dos o más palabras y no conservan relación entre sí. Los tipos de conjunciones son:
                ul.lista-ul--color.mb-5
                  li 
                    i.fas.fa-circle.circle
                    p.mb-0 
                      b Conjunciones coordinantes: 
                      | unen palabras y establecen igualdad entre ellas.
                  li 
                    i.fas.fa-circle.circle
                    p.mb-0 
                      b Conjunciones subordinantes: 
                      | son palabras que no cambian su forma y unen dos elementos con diferentes jerarquías; unen dos partes de la oración y aportan un sentido característico. 
                .tarjeta.p-3.mb-5.fnd-7.px-4
                  .row.justify-content-around.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1   La siguiente imagen nos presenta las diferentes conjunciones.
             
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/Tipos de conjuciones.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download

            .row.px-4(titulo="Interjección")
              .col-md-2.mb-4.mb-md-0
                figure
                  img.img-100(src='@/assets/curso/temas/tema1/img-10.svg', alt='Texto que describa la imagen')
              .col-md-10
                p Es una palabra, o una expresión, que se pronuncia en tono exclamativo y expresa un estado de ánimo. Siempre va entre signos de admiración.
                p.mb-0
                  b Ejemplo: 
                  | ¡formidable! ¡vaya!


    Separador
   

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Clases de oraciones


    .row.justify-content-between.mb-5
      .col-md-6.col-lg-8
        p.mb-5 Teniendo claros los conceptos de las diferentes categorías gramaticales, continuemos con la oración. Se denomina oración gramatical a una palabra o conjunto de palabras con las que se expresa una idea con sentido exacto, compuesta por un sujeto y un predicado.

        .cajon.color-primario.p-4.mb-4.fnd-1
          ul.lista-ul--color
            li 
              i.fas.fa-circle.circle
              p.mb-0 
                b Sujeto: 
                | palabra o grupo de palabras de las que se dice algo.
            li 
              i.fas.fa-circle.circle
              p.mb-0 
                b Predicado:
                | palabra o grupo de palabras que expresan lo que se dice del sujeto.

      .col-md-6.col-lg-4

          figure
            img(src='@/assets/curso/temas/tema1/img-11.png')


    p.mb-5 Ejemplo de oración gramatical:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
            img(src='@/assets/curso/temas/tema1/img-12.svg')



    p.mb-5 Estas oraciones se clasifican con base en tres variables: 

    .row.justify-content-center.align-items-center.mb-5
      ImagenInfografica.color-primario.mb-5.nar
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema1/img-13.svg', alt='Texto que describa la imagen')


        .tarjeta.fnd-10.p-3.px-4(x="19%" y="45.5%" numero="+")
          .h5.mb-2 Dubitativas
          p Son las que expresan duda o probabilidad. A lo mejor iré mañana.
        .tarjeta.fnd-10.p-3.px-4(x="19%" y="54.5%" numero="+")
          .h5.mb-2 Exclamativas
          p Se utilizan para expresar sorpresa, alegría, tristeza, transmiten sentimientos y se escriben entre signos de exclamación. ¡Qué bonito es el vestido!
        .tarjeta.fnd-10.p-3.px-4(x="19%" y="63%" numero="+")
          .h5.mb-2 Interrogativas
          p Se utilizan para preguntar algo y se escriben entre signos de interrogación. ¿Te ha gustado la comida?
        .tarjeta.fnd-10.p-3.px-4(x="19%" y="72%" numero="+")
          .h5.mb-2 Desiderativas
          p Se utilizan para expresar uno o más deseos. Ojalá siempre fuera primavera.
        .tarjeta.fnd-10.p-3.px-4(x="19%" y="81%" numero="+")
          .h5.mb-2 Enunciativas
          p Se utilizan para expresar o comunicar algo y con ellas se afirma o se niega. La sopa está caliente.
        .tarjeta.fnd-10.p-3.px-4(x="19%" y="90%" numero="+")
          .h5.mb-2 Imperativas
          p Se utilizan para dar órdenes, pedir, o prohibir algo. No cortes el césped.          

        .tarjeta.fnd-10.p-3(x="43.8%" y="45.6%" numero="+")
          .h5.mb-2 Atributivas
          p Van asociadas a los verbos ser, estar y parecer. 
        .tarjeta.fnd-10.p-3(x="61%" y="45.6%" numero="+")
          .h5.mb-2 Predicativas
          p Van asociadas a cualquier otro verbo, que no sean los verbos: ser, estar, parecer. 
        .tarjeta.fnd-10.p-3(x="80.5%" y="45.6%" numero="+")
          .h5.mb-2 Simples
          p Son las que tienen un verbo. Los ancianos son lindos.
        .tarjeta.fnd-10.p-3(x="97%" y="45.6%" numero="+")
          .h5.mb-2 Compuestas
          p Son las que tienen dos o más verbos conjugados en forma personal. Cuando oímos los ruidos, se nos cortó la respiración.           

        .tarjeta.fnd-10.p-3(x="62.8%" y="61%" numero="+")
          .h5.mb-2 Transitivas o intransitivas
          p Las transitivas, se caracterizan por tener como núcleo un verbo transitivo, el cual debe llevar un complemento directo para completar su significado. Juan hizo una propuesta. (La propuesta es el complemento directo).
            br
            p Las intransitivas son las que no tienen un complemento directo. Están compuestas por el sujeto y un predicado verbal. Juan y María caminaron.       
        .tarjeta.fnd-10.p-3(x="62.8%" y="69.5%" numero="+")
          .h5.mb-2 Reflexivas
          p En ellas, la acción del sujeto recae sobre sí mismo, y se construyen con los pronombres me, te, se, nos, os. Juan se baña.       
        .tarjeta.fnd-10.p-3(x="62.8%" y="79.1%" numero="+")
          .h5.mb-2 Recíprocas
          p Son las que tienen sujetos múltiples, dos o más que intercambian la acción y se construyen con los pronombres nos, os, se. Ellos se miran.       
        .tarjeta.fnd-10.p-3(x="62.8%" y="88%" numero="+")
          .h5.mb-2 Personales o impersonales
          p Las personales son aquellas que tienen el sujeto explícito o sea que está presente en la oración. El pájaro vuela alto. Las impersonales no tienen sujeto. Es de noche.       
        .tarjeta.fnd-10.p-3(x="62.8%" y="97%" numero="+")
          .h5.mb-2 Pasivas o activas
          p En las activas, el verbo se encuentra en voz activa. El jardinero plantó tomates. Y en las pasivas, el verbo está en voz pasiva y el sujeto recibe la acción. Los tomates fueron plantados por el jardinero.              

        .tarjeta.fnd-10.p-3(x="97%" y="61%" numero="+")
          .h5.mb-2 Coordinadas
          p Se enlazan por conjunciones y preposiciones. El conductor pisó a fondo el freno, pero no consiguió parar. 
        .tarjeta.fnd-10.p-3(x="97%" y="70%" numero="+")
          .h5.mb-2 Subordinadas
          p Dependen estructuralmente de otra oración y carecen de sentido sin la oración principal. La silla que me regalaste es estilo moderno. 
        .tarjeta.fnd-10.p-3(x="97%" y="78.5%" numero="+")
          .h5.mb-2 Yuxtapuestas
          p Son las que se enlazan por signos de puntuación. Guarda esa ropa, cuélgala en tu cuarto.           


    Separador
   

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2  El párrafo


    .row.justify-content-between.mb-5
      .col-md-6.col-lg-4
          figure
            img(src='@/assets/curso/temas/tema1/img-14.png')    
      .col-md-6.col-lg-8
        p.mb-5 Por otra parte, un párrafo es un segmento de un texto conformado por oraciones gramaticales clasificadas en principales y secundarias.        

        .cajon.color-primario.p-4.mb-4.fnd-1
          p El párrafo está compuesto por una idea central, la cual contiene el tema del párrafo y orienta el desarrollo del mismo y por oraciones de apoyo o secundarias, que sostienen la idea principal, pero si se eliminan, no afectan el sentido del párrafo.

        p.mb-5 Para conseguir comunicar las ideas de manera clara y efectiva, es recomendable estructurar el párrafo de la siguiente manera:

        ol.lista-ol--cuadro.mb-5
          li 
            .lista-ol--cuadro__vineta
              span a.
            | Presentar la idea principal.

          li 
            .lista-ol--cuadro__vineta
              span b.
            | Desarrollar, a partir de varias ideas secundarias, la idea principal.

          li 
            .lista-ol--cuadro__vineta
              span c.
            | Finalizar con una idea que aporte, como un cierre, lo que se ha plasmado en el párrafo.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.p-4.mb-4
          p Tener en cuenta que la estructura anterior no es la única forma de organizar un párrafo; se dan párrafos inductivos, en los que se presenta la idea principal, al final del mismo. Sin embargo, exponer la idea principal al inicio, permitirá tener mayor claridad sobre el desarrollo y la estructura del párrafo. 

    ul.lista-ul--color.mor.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Tipos de parrafo         


    p Ahora, existen diferentes tipos de párrafos. Cada uno de ellos se explica a continuación.

    .row.justify-content-between.mb-5
      .col-md-6.col-lg-4
          figure.mb-5
            img(src='@/assets/curso/temas/tema1/img-15.png') 

      .col-md-6.col-lg-8  
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul fnd-5")
          .row(titulo="Párrafos descriptivos")
            p Se usan para:
            ul.lista-ul--color
              li.mb-0 
                i.fas.fa-circle.circle
                p.mb-0 Describir.
              li.mb-0 
                i.fas.fa-circle.circle
                p.mb-0 Fijar particularidades de cosas, personas y/o situaciones.
              li.mb-0 
                i.fas.fa-circle.circle
                p.mb-0 Ahondar en puntos que se quieren destacar.
              li.mb-0 
                i.fas.fa-circle.circle
                p.mb-0 Aclarar una idea o precisar un personaje.

          .row(titulo="Párrafos narrativos")
            ul.lista-ul--color.nar
              li 
                i.fas.fa-check
                | Relatan sucesos o desarrollos desde un objeto o sujeto central.
              li 
                i.fas.fa-check
                | Admiten la lectura y progreso de las ideas.
              li 
                i.fas.fa-check
                | Se emplean en textos científicos e intelectuales.
              li 
                i.fas.fa-check
                | Caracterizan escritos o cuentos, mantienen orden cronológico de asentimientos y aseveraciones.
              li 
                i.fas.fa-check
                | No necesitan garantía.
     
          .row(titulo="Párrafos argumentativos")
            ul.lista-ul--color.nar
              li 
                i.fas.fa-check
                | Precisan ideas u opiniones.
              li 
                i.fas.fa-check
                | Su objetivo es convencer al lector de la idea puntual.
              li 
                i.fas.fa-check
                | El creador apoya su postura o aseveraciones con relación a una idea.
              li 
                i.fas.fa-check
                | Su estructura es múltiple, se relacionan los descriptivos o narrativos.
              li 
                i.fas.fa-check
                | Se establece una hipótesis, tesis, supuesto y se aluden razones. Se citan autores, cifras, hechos verdaderos.
    

    .row.justify-content-between.mb-5
      .col-lg-2
        figure.mb-5
            img.img-135(src='@/assets/curso/temas/tema1/img-16.svg') 

      .col-lg-10
        p.mb-5  También existen otras clasificaciones de párrafos que van ligadas con el tema de cada uno de los escritos y el fragmento del que conforman parte, o sea la introducción, el progreso o la conclusión.            


    ul.lista-ul--color.mor.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Párrafos de introducción

    p.mb-5 Un párrafo de introducción es el contacto inicial que el leyente tendrá con el escrito, de manera que se debe captar su respeto e interés desde el mismo momento inicial, para que continúe leyendo hasta que termine.

    p.mb-5 Los diferentes tipos de párrafos de introducción son: 


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
