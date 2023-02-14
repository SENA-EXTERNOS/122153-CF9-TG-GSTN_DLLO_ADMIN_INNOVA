export default {
  global: {
    componenteFormativo: 'Estructura de documentos',
    descripcionCurso:
      'En el presente componente formativo, se indica la importancia de las categorías gramaticales y signos de puntuación, para llegar a una correcta composición del párrafo y terminar con el estudio del documento y la gestión documental.',
    imagenBannerPrincipal: require('@/assets/curso/temas/portada/portada.png'),
    fondoBannerPrincipal: require('@/assets/curso/temas/portada/img-fnd.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/temas/portada/img-f1-.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/temas/portada/icon-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/temas/portada/icon-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/temas/portada/icon-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Categorías gramaticales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Clases de oraciones',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'El párrafo',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Signos de puntuación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Gestión documental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Documento administrativo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Archivo General de la Nación. (s.f.). <em>Políticas de archivos.</em> Archivo General de la Nación. ',
      link:
        'https://www.archivogeneral.gov.co/politica/politicas#:~:text=La%20pol%C3%ADtica%20de%20gesti%C3%B3n%20documental,conjunto%20de%20est%C3%A1ndares%20para%20la',
    },
    {
      referencia:
        'Ucha, F. (2008).<em> Definición de Documento.</em> Definición ABC.',
      link: 'https://www.definicionabc.com/general/documento.php',
    },
  ],
  glosario: [
    {
      termino: 'Característica',
      significado:
        'cualidad o circunstancia que es propia o peculiar de una persona o una cosa y por la cual se define de otras de su misma especie.',
    },
    {
      termino: 'Clases',
      significado:
        'grupo de elementos de un conjunto que tiene características comunes.',
    },
    {
      termino: 'Conjunción',
      significado:
        'palabra que se utiliza para unir dos o más partes de una oración o dos o más oraciones.',
    },
    {
      termino: 'Documento',
      significado:
        'un documento es la constancia escrita, ya sea de forma física o virtual, que plasma las características de un hecho o circunstancia.',
    },
    {
      termino: 'Estructura',
      significado:
        'modo de estar organizadas u ordenadas las partes de un todo.',
    },
    {
      termino: 'Gramática',
      significado:
        'parte de la lingüística que estudia la estructura de las palabras y sus accidentes, así como la manera en que se combinan para formar oraciones.',
    },
    {
      termino: 'Párrafo',
      significado:
        'es una unidad comunicativa formada por un conjunto de oraciones secuenciales que trata un mismo tema.',
    },

    {
      termino: 'Pronombre',
      significado:
        'palabra que se emplea para designar una cosa sin emplear su nombre, común o propio. ',
    },
    {
      termino: 'Oración',
      significado:
        'es una unidad sintáctica con sentido completo, que está conformada por predicado y sujeto, este último puede ser expreso o implícito.',
    },
    {
      termino: 'Ortografía',
      significado:
        'forma correcta de escribir las palabras y de utilizar los signos auxiliares de una lengua, respetando sus reglas.',
    },
  ],
  complementario: [
    {
      tema: 'Signos de puntuación',
      referencia:
        'Aula365 – Los Creadores. (2016).<em> Cómo usar los signos de puntuación – Videos educativos Aula365 </em>(video). YouTube. https://youtu.be/LtP_UkSj5ho',
      tipo: 'Video',
      link: 'https://youtu.be/LtP_UkSj5ho',
    },
    {
      tema: 'Gestión documental',
      referencia:
        'Pérez, V. (2020).<em> Tipos de documentos (video).</em> YouTube. https://youtu.be/VAvULe9Do60',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=VAvULe9Do60&feature=youtu.be',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
