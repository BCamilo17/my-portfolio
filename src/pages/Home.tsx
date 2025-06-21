import { Link } from "react-router-dom"
import { homeData } from "./../data/index"


export function Home() {
  return (
    <div className="flex flex-col gap-y-4 mt-12">
      <section className="flex flex-col gap-y-2 md:flex-row px-4 md:px-8 lg:px-12 xl:px-80">
        <div className="flex flex-col gap-y-8">
          <div>
            <h1 className="font-bold text-6xl">Hola, soy <span className="text-[#2563eb]">Brayan Annear</span></h1>
            <span className="text-xl">Desarrollador web</span>
          </div>
          <p className="text-lg">Soy ingeniero de sistemas, enfocado en el desarrollo de experiencias web tanto atractivas como funcionales</p>
          <div className="flex gap-x-2">
            <Link to="/portfolio">Ver proyectos</Link>
            <Link to="/contact">Contactar</Link>
          </div>
        </div>
        <div className="w-full flex justify-center">

          <img className="rounded-full w-80 h-80 border-solid border-2  border-blue-400 object-cover" src="https://raw.githubusercontent.com/BCamilo17/portfolio-content/refs/heads/main/images/imagen-perfil.webp" alt="" />

        </div>
      </section>
      <section className="w-full flex flex-col justify-center backgroud-control py-6 px-4 md:px-8 lg:px-12 xl:px-80 gap-4">
        <h2 className="font-bold text-2xl my-10">Explora mi portafolio</h2>
        <div className="flex flex-col gap-y-4 md:grid md:grid-cols-12 md:gap-x-2">
          {homeData.map((e) => (
            <Link to={e.path} key={e.id} className="flex flex-col gap-y-2 gap-2 p-2 rounded-lg border-solid border-gray-200 border-1 hover:shadow-md transition delay-150 duration-150 hover:-translate-y-1 card-background-control md:col-span-6 lg:col-span-3">
              <span className="material-symbols-outlined text-[#2563eb]">{e.icon}</span>
              <h3 className="">{e.title}</h3>
              <p>{e.info}</p>
            </Link>
          ))
          }
        </div>
      </section>
      <section className="w-full flex flex-col justify-center py-6 px-4 md:px-8 lg:px-12 xl:px-80 gap-2">
        <h2 className="font-bold text-2xl">Sobre este portafolio</h2>
        <div className="p-4 rounded-lg border-solid border-gray-200 border-1 hover:shadow-md transition delay-150 duration-150 hover:-translate-y-1 card-background-control flex flex-col gap-2 ">
          <div className="flex flex-col gap-2 border-b-1 border-gray-300 md:grid md:grid-cols-12 md:gap-x-6  pb-4">
            <div className="flex flex-col gap-2 md:col-span-6">
              <h3 className="font-semibold">Construido con tecnologías modernas</h3>
              <p className="text-gray-500">Este portafolio fue desarrollado con el fin de dar a conocer mis habilidades y mi versatilidad con diferentes herramientas en el flujo de un proyecto profesional teniendo en cuenta factores como buenas prácticas, funcionalidad y experiencia de usuario.</p>
              <p className="text-gray-500">Este proyecto es open source y es público en GitHub.</p>
              <a className="p-1 bg-gray-800 hover:bg-gray-900 text-white rounded-lg cursor-pointer w-full flex justify-center" href="https://github.com/BCamilo17/my-portfolio.git" target="_blank">Repositorio</a>
            </div>
            <div className="flex- gap-2 col-span-6">
              <h3 className="font-semibold">Stack tecnológico</h3>
              <div>
                <ul>
                  <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> React v19</li>
                  <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />TypeScript</li>
                  <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />Tailwind CSS 4</li>
                  <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />Vite</li>
                  <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />React Router DOM</li>
                  <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />GitHub</li>
                  <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />Vercel</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Características destacadas</h3>
            <div>
              <ul>
                <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Diseño responsivo y accesible</li>
                <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Modo oscuro</li>
                <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Uso de tecnologías modernas en sus últimas versiones</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
