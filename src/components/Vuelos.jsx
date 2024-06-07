import React from 'react'
import lima_buenos_aires from '../assets/lima_buenos_aires.png'
import destinos from '../assets/destinos.png'
export function Vuelos() {
  return (
    <div>
        <p>Aquí están los vuelos disponibles para la ciudad que has ingresado.</p>
        <img className='w-56' src={lima_buenos_aires} alt="imagen" />
        <a target='_blank' href="https://www.latamairlines.com/pe/es/ofertas-vuelos?origin=LIM&inbound=2024-08-30T12%3A00%3A00.000Z&outbound=2024-07-23T12%3A00%3A00.000Z&destination=BUE&adt=1&chd=0&inf=0&trip=RT&cabin=Economy&redemption=false&sort=RECOMMENDED" className='underline text-blue-600'>Ir al vuelo</a>
    </div>
  )
}
export function Destinos() {
    return (
      <div>
          <p>Aquí están algunos de nuestros destinos más populares</p>
          <img className='w-56' src={destinos} alt="imagen" />
          <a target='_blank' href="https://www.latamairlines.com/pe/es/destinos" className='underline text-blue-600'>Ver destinos</a>
      </div>
    )
  }
  
export function Horarios() {
    return (
      <div>
          <p>Aquí están los horarios de vuelos disponibles para tu consulta</p>
          <img className='w-56' src={destinos} alt="imagen" />
          <a target='_blank' href="https://www.latamairlines.com/pe/es/ofertas-vuelos?origin=LIM&inbound=2024-08-30T12%3A00%3A00.000Z&outbound=2024-07-23T12%3A00%3A00.000Z&destination=BUE&adt=1&chd=0&inf=0&trip=RT&cabin=Economy&redemption=false&sort=RECOMMENDED" className='underline text-blue-600'>Ver horarios</a>
      </div>
    )
  }
