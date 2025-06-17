import { experienceData } from "./../data"
export function Experience() {
console.log(experienceData)
  return (
    <>
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-40 2xl:px-80 flex flex-col gap-y-8">
        <h1 className="text-4xl font-bold text-center mt-12">Experiencia</h1>
        <p className="text-lg text-center mt-4">Aquí encontrarás un resumen de mi trayectoria profesional</p>
        <section className="flex flex-col gap-4">
          {experienceData.map((experience) => (
            <div key={experience.id} className="p-4 flex flex-col gap-2 w-full rounded-lg border-solid border-gray-200 border-1 hover:shadow-md transition delay-150 duration-150 hover:-translate-y-1 card-background-control">
              <h2 className="font-semibold">{experience.role}</h2>
              <div className="flex flex-col gap-2 md:flex-row md:justify-between">
                <a href={experience.url} target="_blank" className="decoration-0 text-blue-600">{experience.company}</a>
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
