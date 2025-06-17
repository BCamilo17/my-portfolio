import { PortfolioCard } from "../components";
import {projectsData} from "./../data"

export function Portfolio() {

  return (
    <>

      <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-40 2xl:px-80 flex flex-col gap-y-8">
        <h1 className="font-bold text-4xl mt-12 flex justify-center items-center">Portafolio</h1>
        <p className="text-lg flex justify-center items-center">Aquí encontrarás una selección de mis proyectos más destacados. Cada proyecto representa diferentes habilidades y tecnologías que he utilizado a lo largo de mi carrera.</p>
        <section className="grid grid-cols-12 gap-2 md:grid-cols-12">
          {projectsData.map((project) => (<PortfolioCard description={project.description} title={project.title} image={project.image} tecnologies={project.tags} githubUrl={project.repoUrl} url={project.demoUrl} key={project.id} />))}
        </section>
      </div>
    </>
  )
}
