<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Categorías gramaticales

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
          
          p Son las que expresan duda o probabilidad. A lo mejor iré mañana.
        .tarjeta.fnd-10.p-3.px-4(x="19%" y="54.5%" numero="+")
          
          p Se utilizan para expresar sorpresa, alegría, tristeza, transmiten sentimientos y se escriben entre signos de exclamación. ¡Qué bonito es el vestido!
        .tarjeta.fnd-10.p-3.px-4(x="19%" y="63%" numero="+")
          
          p Se utilizan para preguntar algo y se escriben entre signos de interrogación. ¿Te ha gustado la comida?
        .tarjeta.fnd-10.p-3.px-4(x="19%" y="72%" numero="+")
          
          p Se utilizan para expresar uno o más deseos. Ojalá siempre fuera primavera.
        .tarjeta.fnd-10.p-3.px-4(x="19%" y="81%" numero="+")
          
          p Se utilizan para expresar o comunicar algo y con ellas se afirma o se niega. La sopa está caliente.
        .tarjeta.fnd-10.p-3.px-4(x="19%" y="90%" numero="+")
          
          p Se utilizan para dar órdenes, pedir, o prohibir algo. No cortes el césped.          

        .tarjeta.fnd-10.p-3(x="43.8%" y="45.6%" numero="+")
          
          p Van asociadas a los verbos ser, estar y parecer. 
        .tarjeta.fnd-10.p-3(x="61%" y="45.6%" numero="+")
          
          p Van asociadas a cualquier otro verbo, que no sean los verbos: ser, estar, parecer. 
        .tarjeta.fnd-10.p-3(x="80.5%" y="45.6%" numero="+")
          
          p Son las que tienen un verbo. Los ancianos son lindos.
        .tarjeta.fnd-10.p-3(x="97%" y="45.6%" numero="+")
          
          p Son las que tienen dos o más verbos conjugados en forma personal. Cuando oímos los ruidos, se nos cortó la respiración.           

        .tarjeta.fnd-10.p-3(x="62.8%" y="61%" numero="+")
          
          p Las transitivas, se caracterizan por tener como núcleo un verbo transitivo, el cual debe llevar un complemento directo para completar su significado. Juan hizo una propuesta. (La propuesta es el complemento directo).
            br
            p Las intransitivas son las que no tienen un complemento directo. Están compuestas por el sujeto y un predicado verbal. Juan y María caminaron.       
        .tarjeta.fnd-10.p-3(x="62.8%" y="69.5%" numero="+")
          
          p En ellas, la acción del sujeto recae sobre sí mismo, y se construyen con los pronombres me, te, se, nos, os. Juan se baña.       
        .tarjeta.fnd-10.p-3(x="62.8%" y="79.1%" numero="+")
          
          p Son las que tienen sujetos múltiples, dos o más que intercambian la acción y se construyen con los pronombres nos, os, se. Ellos se miran.       
        .tarjeta.fnd-10.p-3(x="62.8%" y="88%" numero="+")
          
          p Las personales son aquellas que tienen el sujeto explícito o sea que está presente en la oración. El pájaro vuela alto. Las impersonales no tienen sujeto. Es de noche.       
        .tarjeta.fnd-10.p-3(x="62.8%" y="97%" numero="+")
          
          p En las activas, el verbo se encuentra en voz activa. El jardinero plantó tomates. Y en las pasivas, el verbo está en voz pasiva y el sujeto recibe la acción. Los tomates fueron plantados por el jardinero.              

        .tarjeta.fnd-10.p-3(x="97%" y="61%" numero="+")
          
          p Se enlazan por conjunciones y preposiciones. El conductor pisó a fondo el freno, pero no consiguió parar. 
        .tarjeta.fnd-10.p-3(x="97%" y="70%" numero="+")
          
          p Dependen estructuralmente de otra oración y carecen de sentido sin la oración principal. La silla que me regalaste es estilo moderno. 
        .tarjeta.fnd-10.p-3(x="97%" y="78.5%" numero="+")
          
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
        h3.text-black Tipos de párrafo         


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
            ul.lista-ul--color
              li 
                i.fas.fa-circle.circle
                | Relatan sucesos o desarrollos desde un objeto o sujeto central.
              li 
                i.fas.fa-circle.circle
                | Admiten la lectura y progreso de las ideas.
              li 
                i.fas.fa-circle.circle
                | Se emplean en textos científicos e intelectuales.
              li 
                i.fas.fa-circle.circle
                | Caracterizan escritos o cuentos, mantienen orden cronológico de asentimientos y aseveraciones.
              li 
                i.fas.fa-circle.circle
                | No necesitan garantía.
     
          .row(titulo="Párrafos argumentativos")
            ul.lista-ul--color
              li 
                i.fas.fa-circle.circle
                | Precisan ideas u opiniones.
              li 
                i.fas.fa-circle.circle
                | Su objetivo es convencer al lector de la idea puntual.
              li 
                i.fas.fa-circle.circle
                | El creador apoya su postura o aseveraciones con relación a una idea.
              li 
                i.fas.fa-circle.circle
                | Su estructura es múltiple, se relacionan los descriptivos o narrativos.
              li 
                i.fas.fa-circle.circle
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

    p.mb-3 Un párrafo de introducción es el contacto inicial que el leyente tendrá con el escrito, de manera que se debe captar su respeto e interés desde el mismo momento inicial, para que continúe leyendo hasta que termine.

    p.mb-5 Los diferentes tipos de párrafos de introducción son: 

    .row.m-0.align-items-center.justify-content-between.mb-5

      .col-lg-9
        TabsA.color-acento-contenido.grs
          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="De síntesis")
            p Es el utilizado en todo tipo o modelo de texto; aquí se resume el tema o la materia del escrito. La ventaja de esta entrada se da porque presenta de manera rápida, información integrante sobre el contenido del texto y la desventaja es que permite que la información se manifieste presumible y repetitiva.

          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="De anécdota")
            p Las anécdotas, los hechos, las historias, atraen e involucran al lector.

          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="De breves<br> afirmaciones")
            p Es propio de la práctica periodística; son frases cortas, sintéticas y efectivas.

          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="De cita")
            p Es una de las figuras más utilizadas y efectivas para cautivar la atención del leyente, pueden usarse proverbios, versos de poetas o frases proferidas o escritas por un personaje famoso.   
              
          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="De interrogante")
            p Propone un problema y el texto que le sigue especifica su progreso y, algunas veces, adiciona otros interrogantes que muestran los distintos aspectos del tema inicial.   
              
          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="De analogía")
            p Dispone una comparación entre el asunto escrito y otra postura; explica la dificultad valiéndose de un contexto similar que pueda atraer la atención inicial del leyente.    
              
           
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img-17.png')

    br

    ul.lista-ul--color.mor.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Párrafos de desarrollo

    p.mb-3 Un párrafo de desarrollo es aquel donde se enuncia y explica la idea principal.
    p.mb-5 Los tipos de párrafos de desarrollo son:

    .row.m-0.align-items-center.justify-content-between.mb-5
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img-18.png')
      .col-lg-9
        TabsA.color-acento-contenido.grs
          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="De enumeración")
            p La información se expone en forma de lista que va relacionada entre sus componentes. Este párrafo está conformado por dos partes: la lista de atributos y la idea principal. Puede presentarse en forma de escrutinio, cuenta cuántos componentes anteceden o preceden a la lista y, como resumen, realiza una anticipación que muestra, de forma breve, los contenidos.

          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="De secuencia")
            p Los componentes se integran de forma separada, arreglados, de acuerdo con un criterio explícito. Es común en los textos científicos, y tradicional en las instrucciones operativas para dar solución a un problema.

          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="De comparación/contraste")
            p Muestra las afinidades o diferencias que se dan entre dos o más objetos, situaciones, ideas o individuos y dispone una comparación, según algunos criterios seleccionados anteriormente.

          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="De desarrollo de un concepto")
            p La idea principal se muestra de forma determinada, luego se confirma con ejemplos o argumentaciones. Las ideas de apoyo demuestran, aclaran, aportan detalles o ejemplifican la idea principal. 

          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="De enunciado/solución de un problema")
            p La cuestión y la solución se enuncian de manera elocuente. Su utilización es común en textos descriptivos y científicos. Está formado por dos componentes: a) expone el problema, b) enseña la solución. Para este guion se dan variantes como: forma completa, contraposición de desenlaces, prescindir de solución, eludir el problema.

          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="De causa/efecto")
            p Expone un acontecimiento, suceso o situación, que clarifica las causas que lo causaron. La descripción de esta causa puede preceder o seguir a la de la consecuencia.


    br

    ul.lista-ul--color.mor.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Párrafos de conclusión

    p.mb-3 Es el cierre del escrito, es un párrafo al final del texto, donde se resumen los temas más importantes.
    p.mb-5 Existen varias formas de estructurar una conclusión. A continuación, se muestran las más comunes:

    .row.m-0.align-items-center.justify-content-between.mb-5

      .col-lg-9
        TabsA.color-acento-contenido.grs    

          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="De síntesis")
            p Una corta recopilación de las primordiales ideas del escrito.

          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="De anécdota")
            p Rescata el hilo conductor de todo el escrito por medio de elementos narrativos o visuales, que captan la atención del lector y permiten un buen recuerdo del texto.   

          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="De breves<br> afirmaciones")
            p Suceden a un periodo que simboliza el legítimo final del texto y repercute como un eco, una resonancia que ahonda en él.

          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="De cita")
            p Se puede utilizar el tipo de citas que se desee, siempre que se adapte al tema que se presenta.    

          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="De interrogante")
            p Propone, al final del escrito, las preguntas no resueltas y los problemas expuestos a las presunciones del futuro.

          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="De analogía")
            p Presenta una confrontación entre el texto escrito y otra situación y expresa el problema utilizando un contexto parecido que pueda atraer la atención inicial del lector.    
                                    
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img-19.png')


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
