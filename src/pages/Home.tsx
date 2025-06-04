import { Link } from "react-router-dom"
import { homeData } from "./../data/index"


export function Home() {
  return (
    <div className="flex flex-col gap-y-4">
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
          <div className=" bg-gray-600 rounded-full w-48 h-48 border-solid border-2 border-blue-400">

          </div>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center bg-[#f8fafc] py-6 px-4 md:px-8 lg:px-12 xl:px-80">
        <h2 className="font-bold text-2xl my-10">Explora mi portafolio</h2>
        <div className="flex flex-col gap-y-4 md:grid md:grid-cols-12 md:gap-x-2">
          {homeData.map((e) => (
            <Link to={e.path} key={e.id} className="flex flex-col gap-y-2 gap-2 p-2 rounded-lg border-solid border-gray-200 border-1 hover:shadow-md transition delay-150 duration-150 hover:-translate-y-1 bg-white md:col-span-6 lg:col-span-3">
              <span className="material-symbols-outlined text-[#2563eb]">{e.icon}</span>
              <h3 className="">{e.title}</h3>
              <p>{e.info}</p>
            </Link>
          ))
          }
        </div>
      </section>
    </div>
  )
}
