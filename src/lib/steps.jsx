import {Destinos, Horarios, Vuelos} from "../components/Vuelos";

export const steps = [
  {
    id: '1',
    message: '¡Hola! Soy el asistente virtual de Latam Airlines. ¿En qué puedo ayudarte hoy?',
    trigger: 'opciones',
  },
  {
    id: 'opciones',
    options: [
      { value: 'horarios', label: 'Consultar horarios de vuelos', trigger: 'horarios' },
      { value: 'precios', label: 'Consultar precios de vuelos', trigger: 'precios' },
      { value: 'destinos', label: 'Explorar destinos disponibles', trigger: 'destinos' },
    ],
  },
  {
    id: 'horarios',
    message: 'Por favor, ingresa la ciudad de origen y la ciudad de destino para consultar los horarios de vuelos disponibles.',
    trigger: 'esperarConsulta',
  },
  {
    id: 'esperarConsulta',
    user: true,
    trigger: 'mostrarHorarios',
  },
  {
    id: 'mostrarHorarios',
    // Aquí se mostrarían los horarios de vuelos obtenidos de la base de datos o de la IA.
    component:<Horarios/>,
    asMessage: true,
    trigger: 'opcionesFin',
  },
  {
    id: 'precios',
    message: 'Por favor, ingresa la ciudad de origen y la ciudad de destino para consultar los precios de vuelos disponibles.',
    trigger: 'esperarConsulta',
  },
  {
    id: 'destinos',
    message: '¿A dónde te gustaría viajar? Puedes explorar nuestros destinos más populares o buscar una ciudad específica.',
    trigger: 'opcionesDestinos',
  },
  {
    id: 'opcionesDestinos',
    options: [
      { value: 'populares', label: 'Destinos populares', trigger: 'mostrarPopulares' },
      { value: 'buscar', label: 'Buscar ciudad específica', trigger: 'buscarCiudad' },
    ],
  },
  {
    id: 'mostrarPopulares',
    component:<Destinos/>,
    asMessage: true,
    trigger: 'opcionesFin',
  },
  {
    id: 'buscarCiudad',
    message: 'Por favor, ingresa el nombre de la ciudad que te gustaría visitar.',
    trigger: 'esperarCiudad',
  },
  {
    id: 'esperarCiudad',
    user: true,
    trigger: 'mostrarResultadosCiudad',
  },
  {
    id: 'mostrarResultadosCiudad',
    component:<Vuelos/>,
    asMessage: true,
    trigger: 'opcionesFin',
  },
  {
    id: 'opcionesFin',
    message: '¿Hay algo más en lo que pueda ayudarte?',
    trigger: 'opciones',
  },
];
