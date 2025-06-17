import React, { useState } from "react";

export function Contact() {
  const [text, setText] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const sendMessageWhatsapp = (e: React.FormEvent) => {
    e.defaultPrevented;
    const phone = "573222751118";
    const customMessage = `${text} \natt: ${company}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(customMessage)} `;
    window.open(url, '_blank');
  }

  return (

    <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-40 2xl:px-80 flex flex-col gap-y-8 ">
      <h1 className="text-4xl font-bold text-center mt-12">Contacto</h1>
      <p className="text-lg text-center mt-4">¿Tines una oferta de trabajo? actualmente me encuentro en búsqueda activa de empleo, no dudes en contactarme</p>
      <section className="flex flex-col gap-4 ">
        <div className="p-4 flex flex-col gap-2 w-full rounded-lg border-solid border-gray-200 border-1 hover:shadow-md transition delay-150 duration-150 hover:-translate-y-1 card-background-control  ">
          <form onSubmit={sendMessageWhatsapp} className="flex flex-col gap-y-4">
            <label className="flex flex-col">
              Nombre:
              <input type="text" name="name" className="border border-gray-300 rounded-lg p-2 mt-1" placeholder="Tu nombre" required onChange={e => setCompany(e.target.value)} />
            </label>
            <label className="flex flex-col">
              Mensaje:
              <textarea name="message" rows={5} className="border border-gray-300 rounded-lg p-2 mt-1" placeholder="Tu mensaje" required onChange={e => setText(e.target.value)}></textarea>
            </label>
            <button type="submit" className="bg-blue-600 text-white rounded-lg p-2 hover:bg-blue-700 transition duration-200 cursor-pointer">Enviar</button>
          </form>
        </div>
        <div>
          <div className="p-4 flex flex-col gap-2 w-full rounded-lg border-solid border-gray-200 border-1 hover:shadow-md transition delay-150 duration-150 hover:-translate-y-1 card-background-control">
            <h2></h2>
            <div>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-blue-600">email</span>
                  <div className="flex flex-col">
                    <p>Email</p>
                    <p className="text-gray-500"> annear 2000gmail.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-blue-600">call</span>
                  <div>
                    <p>Teléfono</p>
                    <p className="text-gray-500">322275118</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-blue-600">location_on</span>
                  <div>
                    <p>Ubicación</p>
                    <p className="text-gray-500">Bogotá, Colombia</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="p-4 flex flex-col gap-2 w-full rounded-lg border-solid border-gray-200 border-1 hover:shadow-md transition delay-150 duration-150 hover:-translate-y-1 card-background-control">

          </div> */}
        </div>
      </section>
    </div>
  )
}