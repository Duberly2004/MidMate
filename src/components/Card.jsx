import React from 'react'

export default function Card(props) {
  return (
    <a className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#7ecef4]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100" href="#">
    <div className="mb-5">
        <h3 className="mt-5 font-medium text-lg text-white">{props.title}</h3>
        <p className="mt-1 text-neutral-400 mb-2">{props.description}</p>
        <img className='rounded-xl' src={props.img} alt="img chat ia" />
    </div>
  </a>
  )
}
