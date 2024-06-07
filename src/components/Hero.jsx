import React from 'react'
import video from "../video/video.mp4"
export default function Hero() {
  return (
    <div class="bg-neutral-900">
    <div class="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24 flex gap-4">
      <div>

      <h1 class="font-semibold text-white text-5xl md:text-5xl">
        <span class="text-[#7ecef4]">MindMate:</span> Conexiones profundas, conversaciones inteligentes.
      </h1>
        <p class="mt-5 text-neutral-400 text-lg">
        La plataforma que transforma la manera en que accedes a la información de vuelos. Utilizamos la última tecnología en Inteligencia Artificial para ofrecerte una experiencia rápida, intuitiva y eficiente.
        </p>
      </div>
      <video loop autoPlay muted className='w-96'>
          <source src={video} type="video/mp4" />
      </video>
    </div>
  </div>
  )
}
