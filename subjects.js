let first = '1';
let second = '2';
let sciences = 'Ciencias Y Tecnología';
let humanities = 'Humanidades Y Ciencias Sociales';
let music = 'Música Y Artes Escénicas'
let arts = 'Artes Plásticas, Imágen Y Diseño';
let general = 'General';
let all = 'all';

class Subject {
  constructor(name, level, modality) {
    this.name = name;
    this.level = level;
    this.modality = modality;
  }
}

// First Level
//   Common Subjects
let educacionFisica = new Subject('Educación Física', first, all);
let lenguaCastellanaYLiteratura1 = new Subject('Lengua Castellana Y Literatura I', first, all);
let filosofia = new Subject('Filosofía', first, all)
let lenguaExtranjera1 = new Subject('Lengua Extranjera I', first, all);

//   Common Selections
let tecnicasDeLaboratorio = new Subject('Técnicas De Laboratorio', first, all);
let iniciacionALaAstronomia = new Subject('Iniciación A La Astronomía', first, all);
let segundaLenguaExtranjera1 = new Subject('Segunda Lengua Extranjera I', first, all);
let informaticaYDigitalizacion1 = new Subject('Informática Y Digitalización I', first, all);
let medioNaturalCanario = new Subject('Medio Natural Canario', first, all);
let historiaDeCanarias = new Subject('Historia De Canarias', first, all);
let talleresArtisticos = new Subject('Talleres Artísticos', first, all);
let fotografia = new Subject('Fotografía', first, all);
let culturaCientifica = new Subject('Cultura Científica', first, all);
let tallerDeEtimologiaGrecolatina = new Subject('Taller De Etimología Grecolatina', first, all);
let anatomiaAplicada = new Subject('Anatomía Aplicada', first, all);

//   Ciencias Y Tecnología
let matematicas1 = new Subject('Matemáticas I', first, sciences);
let biologiaGeologiaYCienciasAmbientales = new Subject('Biología, Geología Y Ciencias Ambientales', first, sciences);
let tecnologiaEIngenieria1 = new Subject('Tecnología E Ingenieria I', first, sciences);
let dibujoTecnico1 = new Subject('Dibujo Técnico I', first, sciences);
let fisicaYQuimica = new Subject('Física Y Química', first, sciences);

//   Humanidades Y Ciencias Sociales
let latin1 = new Subject('Latin I', first, humanities);
let matematicasAplicadasALasCCSS1 = new Subject('Matemáticas Aplicadas A Las CCSS I', first, humanities);
let griego1 = new Subject('Griego I', first, humanities);
let economia = new Subject('Economía', first, humanities);
let haDelMundoContemporaneo = new Subject('Hª Del Mundo Contemporaneo', first, humanities);
let literaturaUniversal = new Subject('Literatura Universal', first, humanities);

//   Música Y Artes Escénicas
let analisisMusical1 = new Subject('Análisis Musical I', first, music);
let artesEscenicas1 = new Subject('Artes Escénicas I', first, music);
let coroYTecnicaVocal1 = new Subject('Coro Y Técnica Vocal I', first, music);
let lenguajeYPracticaMusical = new Subject('Lenguaje Y Práctica Musical', first, music);
let culturaAudiovisual = new Subject('Cultura Audiovisual', first, music + '-' + arts);

//   Artes Plásticas, Imágen Y Diseño
let dibujoArtistico1 = new Subject('Dibujo Artístico I', first, arts);
let volumen = new Subject('Volumen', first, arts);
culturaAudiovisual = new Subject('Cultura Audiovisual', first, music + '-' + arts);
let proyectosArtisticos = new Subject('Proyectos Artísticos', first, arts);
let dibujoTecnicoAplicadoALasArtesPlasticasYAlDiseno1 = new Subject('Dibujo Técnico Aplicado A Las Artes Plasticas Y Al Diseño I', first, arts);

//   General
let matematicasGenerales = new Subject('Matemáticas Generales', first, general);
let economiaEmprendimientoYActividadEmpresarial = new Subject('Economía, Emprendimiento Y Actividad Empresarial', first, general);

// Second level
//   Common Subjects
let historiaDeLaFilosofia = new Subject('Historia De La Filosofía', second, all);
let lenguaCastellanaYLiteratura2 = new Subject('Lengua Castellana Y Literatura II', second, all);
let historiaDeEspana = new Subject('Historia De España', second, all);
let lenguaExtranjera2 = new Subject('Lengua Extranjera II', second, all);

//   Common Selections
let acondicionamientoFisico = new Subject('Acondicionamiento Físico', second, all);
let antropologiaYSociologia = new Subject('Antropología Y Sociología', second, all);
let segundaLenguaExtranjera2 = new Subject('Segunda Lengua Extranjera II', second, all);
let informaticaYDigitalizacion2 = new Subject('Informática Y Digitalización II', second, all);
let psicologia = new Subject('Psicología', second, all);
let mitologiaYLasArtes = new Subject('Mitología Y Las Artes', second, all);
let fundamentosDeAdministracionYGestion = new Subject('Fundamentos De Adminnistración Y Gestion', second, all);
let biologiaHumana = new Subject('Biología Humana', second, all);
let electrotecnia = new Subject('Electrotecnia', second, all);
let musicaYSociedad = new Subject('Música Y Sociedad', second, all);
let literaturaCanaria = new Subject('Literatura Canaria', second, all);
let bioestadistica = new Subject('Bioestadística', second, all);
let artesAplicadasALaEsculturaALaPinturaYAlDibujo = new Subject('Artes Aplicadas A La Escultura, A La Pintura Y Al Dibujo', second, all);
let imagenYSonido = new Subject('Imagen Y Sonido', second, all);

//   Ciencias Y Tecnología
let matematicas2 = new Subject('Matemáticas II', second, sciences);
let matematicasAplicadasALasCCSS2 = new Subject('Matemáticas Aplicadas A Las CCSS II', second, sciences + '-' + humanities);
let biologia = new Subject('Biología', second, sciences);
let geologiaYCienciasAmbientales = new Subject('Geología Y Ciencias Ambientales', second, sciences);
let tecnologiaEIngenieria2 = new Subject('Tecnología E Ingeniería II', second, sciences);
let dibujoTecnico2 = new Subject('Dibujo Técnico II', second, sciences);
let fisica = new Subject('Física', second, sciences);
let quimica = new Subject('Química', second, sciences);

//   Humanidades Y Ciencias Sociales
let latin2 = new Subject('Latin II', second, humanities);
matematicasAplicadasALasCCSS2 = new Subject('Matemáticas Aplicadas A Las CCSS II', second, sciences + '-' + humanities);
let griego2 = new Subject('Griego II', second, humanities);
let empresaYDisenoDeModelosDeNegocio = new Subject('Empresa Y Diseño De Modelos De Negocio', second, humanities);
let geografia = new Subject('Geografía', second, humanities);
let haDelArte = new Subject('Hª Del Arte', second, humanities);

//   Música Y Artes Escénicas
let analisisMusical2 = new Subject('Análisis Musical II', second, music);
let artesEscenicas2 = new Subject('Artes Escénicas II', second, music);
let coroYTecnicaVocal2 = new Subject('Coro Y Técnica Vocal II', second, music);
let haDeLaMusicaYDeLaDanza = new Subject('Hª De La Música Y De La Danza', second, music);
let literaturaDramatica = new Subject('Literatura Dramática', second, music);

//   Artes Plásticas, Imagen Y Diseño
let dibujoArtistico2 = new Subject('Dibujo Artístico II', second, arts);
let tecnicasDeExpresionGraficoPlastica = new Subject('Técnicas De Expresión Grafico-Plástica', second, arts);
let fundamentosArtisticos = new Subject('Fundamentos Artísticos', second, arts);
let diseno = new Subject('Diseño', second, arts);
let dibujoTecnicoAplicadoALasArtesPlasticasYAlDiseno2 = new Subject('Dibujo Técnico Aplicado A Las Artes Plásticas Y Al Diseño II', second, arts);

//   General
let cienciasGenerales = new Subject('Ciencias Generales', second, general);
let movimientosCulturalesYArtisticos = new Subject('Movimientos Culturales Y Artísticos', second, general);

// Common Subjects are auto-checked
let commonSubjects1 = [
  educacionFisica,
  lenguaCastellanaYLiteratura1,
  filosofia,
  lenguaExtranjera1
]

// Common Selections are not checked
let commonSelections1 = [
  tecnicasDeLaboratorio,
  iniciacionALaAstronomia,
  segundaLenguaExtranjera1,
  informaticaYDigitalizacion1,
  medioNaturalCanario,
  historiaDeCanarias,
  talleresArtisticos,
  fotografia,
  culturaCientifica,
  tallerDeEtimologiaGrecolatina,
  anatomiaAplicada
]

let sciencesSubjects1 = [
  matematicas1,
  biologiaGeologiaYCienciasAmbientales,
  tecnologiaEIngenieria1,
  dibujoTecnico1,
  fisicaYQuimica
]

let humanitiesSubjects1 = [
  latin1,
  matematicasAplicadasALasCCSS1,
  griego1,
  economia,
  haDelMundoContemporaneo,
  literaturaUniversal
]

let musicSubjects1 = [
  analisisMusical1,
  artesEscenicas1,
  coroYTecnicaVocal1,
  lenguajeYPracticaMusical,
  culturaAudiovisual
]

let artsSubjects1 = [
  dibujoArtistico1,
  volumen,
  culturaAudiovisual,
  proyectosArtisticos,
  dibujoTecnicoAplicadoALasArtesPlasticasYAlDiseno1,
]

let generalSubjects1 = [
  matematicasGenerales,
  economiaEmprendimientoYActividadEmpresarial
]

let allSubjectsButGeneral1 = [
  matematicas1,
  biologiaGeologiaYCienciasAmbientales,
  tecnologiaEIngenieria1,
  dibujoTecnico1,
  fisicaYQuimica,
  latin1,
  matematicasAplicadasALasCCSS1,
  griego1,
  economia,
  haDelMundoContemporaneo,
  literaturaUniversal,
  analisisMusical1,
  artesEscenicas1,
  coroYTecnicaVocal1,
  lenguajeYPracticaMusical,
  dibujoArtistico1,
  volumen,
  culturaAudiovisual,
  proyectosArtisticos,
  dibujoTecnicoAplicadoALasArtesPlasticasYAlDiseno1,
]

let subjectTable1 = {
  [sciences] : sciencesSubjects1,
  [humanities] : humanitiesSubjects1,
  [music] : musicSubjects1,
  [arts] : artsSubjects1,
  [general] : generalSubjects1
}

let commonSubjects2 = [
  historiaDeLaFilosofia,
  lenguaCastellanaYLiteratura2,
  historiaDeEspana,
  lenguaExtranjera2
]

let commonSelections2 = [
  acondicionamientoFisico,
  antropologiaYSociologia,
  segundaLenguaExtranjera2,
  informaticaYDigitalizacion2,
  psicologia,
  mitologiaYLasArtes,
  fundamentosDeAdministracionYGestion,
  biologiaHumana,
  electrotecnia,
  musicaYSociedad,
  literaturaCanaria,
  bioestadistica,
  artesAplicadasALaEsculturaALaPinturaYAlDibujo,
  imagenYSonido
]

let sciencesSubjects2 = [
  matematicas2,
  matematicasAplicadasALasCCSS2,
  biologia,
  geologiaYCienciasAmbientales,
  tecnologiaEIngenieria2,
  dibujoTecnico2,
  fisica,
  quimica
]

let humanitiesSubjects2 = [
  latin2,
  griego2,
  empresaYDisenoDeModelosDeNegocio,
  geografia,
  haDelArte
]

let musicSubjects2 = [
  analisisMusical2,
  artesEscenicas2,
  coroYTecnicaVocal2,
  haDeLaMusicaYDeLaDanza,
  literaturaDramatica
]

let artsSubjects2 = [
  dibujoArtistico2,
  tecnicasDeExpresionGraficoPlastica,
  fundamentosArtisticos,
  diseno,
  dibujoTecnicoAplicadoALasArtesPlasticasYAlDiseno2
]

let generalSubjects2 = [
  cienciasGenerales,
  movimientosCulturalesYArtisticos
]

let subjectTable2 = {
  [sciences] : sciencesSubjects2,
  [humanities] : humanitiesSubjects2,
  [music] : musicSubjects2,
  [arts] : artsSubjects2,
  [general] : generalSubjects2
}

let allSubjectsButGeneral2 = [
matematicas2,
  matematicasAplicadasALasCCSS2,
  biologia,
  geologiaYCienciasAmbientales,
  tecnologiaEIngenieria2,
  dibujoTecnico2,
  fisica,
  quimica,
  latin2,
  griego2,
  empresaYDisenoDeModelosDeNegocio,
  geografia,
  haDelArte,
  analisisMusical2,
  artesEscenicas2,
  coroYTecnicaVocal2,
  haDeLaMusicaYDeLaDanza,
  literaturaDramatica,
  dibujoArtistico2,
  tecnicasDeExpresionGraficoPlastica,
  fundamentosArtisticos,
  diseno,
  dibujoTecnicoAplicadoALasArtesPlasticasYAlDiseno2
]

export {
  first,
  second,
  sciences,
  humanities,
  music,
  arts,
  general,
  all,
  
  Subject,
  commonSubjects1,
  commonSelections1,
  sciencesSubjects1,
  humanitiesSubjects1,
  musicSubjects1,
  artsSubjects1,
  generalSubjects1,
  subjectTable1,
  allSubjectsButGeneral1,
  commonSubjects2,
  commonSelections2,
  sciencesSubjects2,
  humanitiesSubjects2,
  musicSubjects2,
  artsSubjects2,
  generalSubjects2,
  subjectTable2,
  allSubjectsButGeneral2,
};
