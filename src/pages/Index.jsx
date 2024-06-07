import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Card from "../components/Card";
import img_chat_ia from "../assets/chat_ia.png";
import img_logo from "../assets/logo.png"
import img_robot from "../assets/robot.jpg";
import img_chat from "../assets/chat.png";
import Step from "../components/Step";
export default function Index() {
  return (
    <div>
      <Header />
      <div id="content">
        <Hero />

        {/* <!-- Case Stories --> */}
        <div className="bg-neutral-900 bg-gradient-to-t from-black to-transparent">
          <div className="max-w-5xl px-4 xl:px-0 py-24 mx-auto">
            {/* <!-- Card Grid --> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center border border-neutral-700 divide-y lg:divide-y-0 lg:divide-x divide-neutral-700 rounded-xl">
              <Card
                title="Misión"
                description="Tranformar la forma en que las empresas interactuan con sus clientes a travéz del chat, ofreciendo experiencias personalizadas utilizando un motor de inteligencia artificial."
                img={img_robot}
              />

              <Card
                title="Visión"
                description="Liderar la revolución del uso de intelifencia artificial en chats personalizados, siendo reconocidos como el socio preferido para empresas que buscan ofrecer experiencias de chat excepcionales y únicas"
                img={img_chat_ia}
              />
            </div>
            {/* <!-- End Card Grid --> */}
          </div>
        </div>

        {/* <!-- Stats --> */}
        <div className="bg-neutral-900">
          <div className="max-w-5xl px-4 xl:px-0 py-10 mx-auto">
            <div className="border border-neutral-800 rounded-xl">
              <div className="p-4 lg:p-8 bg-gradient-to-bl from-neutral-800 via-neutral-900 to-neutral-950 rounded-xl">
                <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
                  {/* <!-- Stats --> */}
                  <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <svg
                      className="flex-shrink-0 size-6 sm:size-8 text-[#7ecef4] mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                      <path d="m21 3 1 11h-2" />
                      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                      <path d="M3 4h8" />
                    </svg>
                    <div className="mt-3 sm:mt-5">
                      <h3 className="text-lg sm:text-3xl font-semibold text-white">
                        99%
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-neutral-400">
                        Tecnología de Punta
                      </p>
                    </div>
                  </div>
                  {/* <!-- End Stats --> */}

                  {/* <!-- Stats --> */}
                  <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <div className="flex justify-center items-center -space-x-5">
                      <img
                        className="relative z-[2] flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800"
                        src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                        alt="Image Description"
                      />
                      <img
                        className="relative z-[1] flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800 -mt-7"
                        src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                        alt="Image Description"
                      />
                      <img
                        className="relative flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800"
                        src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=2.5&amp;w=320&amp;h=320&amp;q=80"
                        alt="Image Description"
                      />
                    </div>
                    <div className="mt-3 sm:mt-5">
                      <h3 className="text-lg sm:text-3xl font-semibold text-white">
                        99%
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-neutral-400">
                        Atención al Usuario
                      </p>
                    </div>
                  </div>
                  {/* <!-- End Stats --> */}

                  {/* <!-- Stats --> */}
                  <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <svg
                      className="flex-shrink-0 size-6 sm:size-8 text-[#7ecef4] mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                      <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                      <path d="m2 16 6 6" />
                      <circle cx="16" cy="9" r="2.9" />
                      <circle cx="6" cy="5" r="3" />
                    </svg>
                    <div className="mt-3 sm:mt-5">
                      <h3 className="text-lg sm:text-3xl font-semibold text-white">
                        99%
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-neutral-400">
                        Ahorro de Tiempo
                      </p>
                    </div>
                  </div>
                  {/* <!-- End Stats --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Stats --> */}

        {/* <!-- Approach --> */}
        <div className="bg-neutral-900">
          {/* <!-- Approach --> */}
          <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20  mx-auto">
            {/* <!-- Title --> */}
            <div className="max-w-3xl mb-10 lg:mb-14">
              <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
                Descripción
              </h2>
              <p className="mt-1 text-neutral-400">
                MidMate es una aplicación web que revoluciona la forma en la que las empresas interactuan con sus clientes a travéz del chat con una combinación única de inteligencia artificial y aprendizaje automático.
              </p>
            </div>
            {/* <!-- End Title --> */}

            {/* <!-- Grid --> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
              <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
                <img
                  className="w-full object-cover rounded-xl"
                  src={img_chat}
                  alt="Image Description"
                />
              </div>
              {/* <!-- End Col --> */}

              {/* <!-- Timeline --> */}
              <div>
                {/* <!-- Heading --> */}
                <div className="mb-4">
                  <h3 className="text-xs font-medium uppercase text-[#7ecef4]">
                    Aportes y beneficios
                  </h3>
                </div>
                {/* <!-- End Heading --> */}
                <Step steps ={[
                  {title:"Adaptación: ",description:"Se adapta a las necesidades de empresas de cualquier tamaño."},
                  {title:"Retención de clientes: ",description:"Contribuye a una alta retención de clientes ya que se sienten valorados y comprendidos."},
                  {title:"Experiencia de chat más natural: ",description:"Gracias a sus algoritmos de aprendizaje automatico MindMate ofrece una mejor experiencia de usuario."},
                  {title:"Alta personalización: ",description:"Adapata cada conversación según el perfil, historial y comportamiento del usuario."},
                  {title:"Eficencia operativa: ",description:"Ayuda a reducir la carga de trabajo del equipo de atención al cliente."},
                  ]}/>

                <a
                  className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#7ecef4] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                  href="#"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    <path
                      className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition"
                      d="M14.05 2a9 9 0 0 1 8 7.94"
                    ></path>
                    <path
                      className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                      d="M14.05 6A5 5 0 0 1 18 10"
                    ></path>
                  </svg>
                  Obtener
                </a>
              </div>
              {/* <!-- End Timeline --> */}
            </div>
            {/* <!-- End Grid --> */}
          </div>
        </div>
        {/* <!-- End Approach --> */}

        {/* <!-- Contact --> */}
        <div className="bg-neutral-900" id="#contact">
          <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
            {/* <!-- Title --> */}
            <div className="max-w-3xl mb-10 lg:mb-14">
              <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
                Contactanos
              </h2>
              <p className="mt-1 text-neutral-400">
                Whatever your goal - we will get you there.
              </p>
            </div>
            {/* <!-- End Title --> */}

            {/* <!-- Grid --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
              <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
                <form>
                  <div className="space-y-4">
                    {/* <!-- Input --> */}
                    <div className="relative">
                      <input
                        type="text"
                        id="hs-tac-input-name"
                        className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2"
                        placeholder="Name"
                      />
                      <label
                        for="hs-tac-input-name"
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:text-xs
                  peer-focus:-translate-y-1.5
                  peer-focus:text-neutral-400
                  peer-[:not(:placeholder-shown)]:text-xs
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-neutral-400"
                      >
                        Nombre
                      </label>
                    </div>
                    {/* <!-- End Input --> */}

                    {/* <!-- Input --> */}
                    <div className="relative">
                      <input
                        type="email"
                        id="hs-tac-input-email"
                        className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2"
                        placeholder="Email"
                      />
                      <label
                        for="hs-tac-input-email"
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:text-xs
                  peer-focus:-translate-y-1.5
                  peer-focus:text-neutral-400
                  peer-[:not(:placeholder-shown)]:text-xs
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-neutral-400"
                      >
                        Correo
                      </label>
                    </div>
                    {/* <!-- End Input --> */}

                    {/* <!-- Input --> */}
                    <div className="relative">
                      <input
                        type="text"
                        id="hs-tac-input-company"
                        className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2"
                        placeholder="Company"
                      />
                      <label
                        for="hs-tac-input-company"
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:text-xs
                  peer-focus:-translate-y-1.5
                  peer-focus:text-neutral-400
                  peer-[:not(:placeholder-shown)]:text-xs
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-neutral-400"
                      >
                        Compañia
                      </label>
                    </div>
                    {/* <!-- End Input --> */}

                    {/* <!-- Input --> */}
                    <div className="relative">
                      <input
                        type="text"
                        id="hs-tac-input-phone"
                        className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2"
                        placeholder="Phone"
                      />
                      <label
                        for="hs-tac-input-phone"
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:text-xs
                  peer-focus:-translate-y-1.5
                  peer-focus:text-neutral-400
                  peer-[:not(:placeholder-shown)]:text-xs
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-neutral-400"
                      >
                        Teléfono
                      </label>
                    </div>
                    {/* <!-- End Input --> */}

                    {/* <!-- Textarea --> */}
                    <div className="relative">
                      <textarea
                        id="hs-tac-message"
                        className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2"
                        placeholder="This is a textarea placeholder"
                      ></textarea>
                      <label
                        for="hs-tac-message"
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:text-xs
                  peer-focus:-translate-y-1.5
                  peer-focus:text-neutral-400
                  peer-[:not(:placeholder-shown)]:text-xs
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-neutral-400"
                      >
                        ¿Qué tienes en mente?
                      </label>
                    </div>
                    {/* <!-- End Textarea --> */}
                  </div>

                  <div className="mt-2">
                    <p className="text-xs text-neutral-500">
                      Este campo es requerido
                    </p>

                    <p className="mt-5">
                      <a
                      onClick={()=>alert("Mensaje enviado")}
                        className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#7ecef4] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                        href="#"
                      >
                        Enviar
                        <svg
                          className="flex-shrink-0 size-4 transition group-hover:translate-x-0 group-focus:translate-x-0"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </p>
                  </div>
                </form>
              </div>
              {/* <!-- End Col --> */}

              <div className="space-y-14">
                {/* <!-- Item --> */}
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 size-6 text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div className="grow">
                    <h4 className="text-white font-semibold">Oficinas:</h4>

                    <address className="mt-1 text-neutral-400 text-sm not-italic">
                      San Isidro - Lima
                    </address>
                  </div>
                </div>
                {/* <!-- End Item --> */}

                {/* <!-- Item --> */}
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 size-6 text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                    <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                  </svg>
                  <div className="grow">
                    <h4 className="text-white font-semibold">Correo:</h4>

                    <a
                      className="mt-1 text-neutral-400 text-sm"
                      href="#mailto:example@site.co"
                      target="_blank"
                    >
                      midmate@gmail.com
                    </a>
                  </div>
                </div>
                {/* <!-- End Item --> */}
              </div>
              {/* <!-- End Col --> */}
            </div>
            {/* <!-- End Grid --> */}
          </div>
        </div>
        {/* <!-- End Contact --> */}
      </div>

      {/* <!-- ========== FOOTER ========== --> */}
      <footer className="relative overflow-hidden bg-neutral-900">

        <div className="relative z-10">
          <div className="w-full max-w-5xl px-4 xl:px-0 py-10 lg:pt-16 mx-auto">
            <div className="inline-flex items-center">
              {/* <!-- Logo --> */}
              <img className="w-10" src={img_logo} alt="" />
              {/* <!-- End Logo --> */}

              <div className="border-s border-neutral-700 ps-5 ms-5">
                <p className="text-sm text-neutral-400">2024 MidMate</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
