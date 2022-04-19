export default {
  global: {
    componenteFormativo: 'Gestión para la provisión de cargo',
    descripcionCurso:
      'Es importante realizar buenas prácticas en el proceso de reclutamiento, es por esta razón que el área de Talento Humano dentro de sus políticas debe contemplar el envío de comunicaciones formales y presentar una documentación  clara de todos los procedimientos que realiza (solicitud de personal, hoja de vida, notas de resultados a los candidatos, etc.)',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Requisición',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Análisis o creación del perfil del cargo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Convocatoria',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Recepción y análisis de hojas de vida',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Evaluación de antecedentes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Informe sobre candidatos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo:
          'Evaluación del reclutamiento de personal en las organizaciones (Buenas prácticas)',
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
        'Alles, Martha. (2006). Dirección Estratégica de Recursos Humanos. Buenos Aires: Granica. ',
    },
    {
      referencia:
        'Alles, Martha. (2016). Selección por competencias. Buenos Aires: Granica. ',
    },
  ],
  glosario: [
    {
      termino: 'Base de datos',
      significado:
        'Conjunto de datos pertenecientes a un mismo contexto, en este caso busca almacenar, sistemáticamente, los datos de los candidatos que participan en los procesos de selección de la organización y permite realizar consultas posteriores de las que se pueden extraer datos que permitan el cubrimiento de futuras vacantes.',
    },
    {
      termino: 'Capacidades',
      significado: 'Conocimiento, competencias y experiencia.',
    },
    {
      termino: 'Competencia',
      significado:
        'características de personalidad, expresadas en comportamientos, que generan un desempeño exitoso en un puesto de trabajo.',
    },
    {
      termino: 'Conocimiento',
      significado:
        'Conjunto de saberes ordenados sobre un tema en particular, materia o disciplina.',
    },
    {
      termino: '<em>Employer Branding</em>',
      significado:
        'Creación de marca del empleador.  Es el proceso de creación de identidad y gestión de la imagen de la empresa en su papel como proveedora de empleo.',
    },
    {
      termino: 'Experiencia',
      significado:
        'Práctica prolongada de una actividad que permite incorporar nuevos conocimientos e incrementar la eficacia de su aplicación y el desarrollo de competencias, lo que influye en la  optimización de los resultados de dicha actividad.',
    },
    {
      termino: '<em>Headhunting</em>',
      significado:
        'Método de selección de personal en el que un cazatalentos, también denominado head-hunter, realiza la búsqueda directa del perfil profesional que una empresa solicita.',
    },
    {
      termino: 'Identidad digital',
      significado:
        'Expresión que determina el conjunto de información (perfiles profesionales, noticias, referencias de blogs, etc.) que se pueden encontrar en Internet sobre una persona.',
    },
    {
      termino: 'LinkedIn',
      significado:
        'Red profesional líder a nivel mundial, es una comunidad social orientada a las empresas, negocios y el empleo. Partiendo del perfil de cada usuario, que libremente revela su experiencia laboral y sus destrezas, en un verdadero CV laboral, la web pone en contacto a millones de personas y empresas.',
    },
    {
      termino: 'Macroprocesos',
      significado:
        'Agrupan a los procesos que comparten un objetivo común, por lo que resulta fundamental definir correctamente los objetivos, asegurando su coherencia con la misión y los objetivos institucionales.',
    },
    {
      termino: 'Motivación',
      significado:
        'Es aquello que impulsa a una persona a actuar de determinada manera, la motivación es uno de los factores internos de los seres humanos que requiere mayor atención.<br>Interés recurrente para el logro de un objetivo, energiza, orienta y selecciona comportamientos.',
    },
    {
      termino: 'Profesiograma',
      significado:
        'Documento donde se especifican y se acreditan las funciones que tiene un empleado en su puesto de trabajo, se plasman aptitudes y capacidades que debe tener una persona para desarrollar una tarea, también llamado perfil profesional.',
    },
    {
      termino: 'Selección',
      significado:
        'Actividad de clasificación donde se escoge a aquellos que tengan mayor posibilidades de adaptarse al cargo ofrecido y satisfacer así las necesidades de la organización y del perfil.',
    },
    {
      termino: 'Servicios de Redes Sociales ',
      significado:
        '(Social networking) conjunto de servicios, habitualmente basados en plataformas WEB, donde el usuario puede ponerse en contacto con otras personas, sean conocidas o no, compartiendo información y creando comunidades virtuales. ',
    },
    {
      termino: 'Talento',
      significado:
        'Conocimiento y desarrollo de competencias que posee una persona, más allá de lo requerido por su puesto de trabajo.',
    },
  ],
  complementario: [
    {
      texto: 'Canal P. (2015). Cómo crear una oferta de empleo atractiva.',
      tipo: 'Blog',
      link:
        'https://www.iebschool.com/blog/como-crear-oferta-empleo-atractiva-reclutamiento-seleccion/',
    },
    {
      texto:
        'Bizneo HR Software. (2021). Cómo identificar una buena hoja de vida en 8 pasos.',
      tipo: 'Blog',
      link: 'https://www.bizneo.com/blog/hoja-de-vida/',
    },
    {
      texto: 'Adriana M. (2019). Qué son y para qué sirven los ATS. ',
      tipo: 'Página Web',
      link: 'https://empresas.infoempleo.com/hrtrends/ats-reclutamiento',
    },
    {
      texto:
        'Ley 1581 2012. Por la cual se dictan disposiciones generales para la protección de datos personales. Octubre 17 de 2012. DO.No.48587',
      tipo: 'Ley',
      link:
        'https://sena-globallex-info.bdigital.sena.edu.co/normativa/detalle/ley-1581-de-2012-24760/pdf',
    },
    {
      texto:
        'Centro de gestión empresarial. (2019). Como elaborar una lista de chequeo. ',
      tipo: 'Página Web',
      link:
        'https://iso9001-calidad-total.com/2012/05/09/como-elaborar-listas-de-chequeo/',
    },
    {
      texto:
        'González J. (2021). Primeras consideraciones al recibir una hoja de vida. ',
      tipo: 'Artículo',
      link:
        'https://www-gestionhumana-com.bdigital.sena.edu.co/cuales-son-las-principales-consideraciones-al-recibir-hojas-de-vida-en-video',
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
        cargo: 'Responsable Equipo Desarrollo Curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Alexis Viloria Guerrero',
        cargo: 'Experto temático',
        centro: 'Centro Gestión Administrativa Regional Distrito Capital',
      },
      {
        nombre: 'Vilma Perilla ',
        cargo: 'Acompañamiento instruccional',
        centro: 'Centro de Gestión Industrial Regional Distrito Capital',
      },
      {
        nombre: 'Ana Vela Rodríguez Velásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora Metodológica',
        centro: 'entro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Sanraa Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
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
        nombre: 'Jesús Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ' ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ' ',
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
