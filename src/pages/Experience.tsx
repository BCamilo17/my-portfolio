export function Experience() {

  const experiences = [
    {
      id: 1,
      role: "Desarrollador web",
      company: "Aviatur",
      period: {
        start: "Noviembre 2022",
        end: "Noviembre 2024",
      },
      description:
        "Lidero el desarrollo de aplicaciones web utilizando React y Next.js. Implementé nuevas características que aumentaron la retención de usuarios en un 25%. Colaboro con equipos de diseño y backend para crear experiencias de usuario cohesivas.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
      url: "https://www.aviatur.com/",
    },
    {
      id: 2,
      role: "Desarrollador Web",
      company: "Aviatur",
      period: {
        start: "Noviembre 2022",
        end: "Noviembre 2024",
      },
      description:
        "Desarrollé sitios web responsivos para diversos clientes. Trabajé en un equipo ágil para entregar proyectos dentro de plazos ajustados. Implementé mejoras de rendimiento que redujeron los tiempos de carga en un 40%.",
      technologies: ["JavaScript", "HTML", "CSS", "WordPress", "PHP"],
      url: "https://www.aviatur.com/",
    },
    {
      id: 3,
      role: "Desarrollador web",
      company: "aviatur",
      period: {
        start: "Noviembre 2022",
        end: "Noviembre 2024",
      },
      description:
        "Contribuí al desarrollo de una aplicación SaaS utilizando React. Colaboré en la implementación de una nueva interfaz de usuario que mejoró la experiencia del usuario. Participé en revisiones de código y sesiones de pair programming.",
      technologies: ["React", "Redux", "SASS", "Jest", "Webpack"],
      url: "https://www.aviatur.com/",
    },
  ]
  return (
    <>
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-40 2xl:px-80 flex flex-col gap-y-8">
        <h1 className="text-4xl font-bold text-center mt-12">Experiencia</h1>
        <p className="text-lg text-center mt-4">Aquí encontrarás un resumen de mi trayectoria profesional</p>
        <section className="flex flex-col gap-4">
          {experiences.map((experience) => (
            <div key={experience.id} className="p-4 flex flex-col gap-2 w-full rounded-lg border-solid border-gray-200 border-1 hover:shadow-md transition delay-150 duration-150 hover:-translate-y-1 card-background-control">
              <h2 className="font-semibold">{experience.role}</h2>
              <div className="flex flex-col gap-2 md:flex-row md:justify-between">
                <a href="https://www.aviatur.com/" target="_blank" className="decoration-0 text-blue-600">{experience.company}</a>
                <p className="text-[14px] text-gray-500">{experience.period.start} - {experience.period.end}</p>
              </div>
              <p>{experience.description}</p>
              <div className="flex gap-2 flex-wrap">
                {experience.technologies.map((tech, index) => (
                  <div key={index} className="bg-blue-100 text-blue-800 px-2 rounded-xl w-fit">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}

        </section>
      </div>
    </>
  )
}
