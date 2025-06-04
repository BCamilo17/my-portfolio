import { skillsData, educationData } from "./../data/index"

export function About() {


  return (
    <>
      <div className="px-4 md:px-8 lg:px-12 xl:px-80 mt-12 flex flex-col gap-y-8">
        <section className="flex gap-y-4 flex-col">
          <h1 className="text-4xl font-bold flex justify-center">Sobre mí</h1>
          <div className="grid grid-cols-12 gap-y4 md:gap-x-12">
            <div className="col-span-12 md:col-span-6 bg-gray-600 h-[200px] rounded-lg">

            </div>
            <div className="col-span-12 md:col-span-6">
              <h2>Brayan Camilo Annear Cuta</h2>
              <p>Desarrollador web full stack</p>
              <p>
                Soy ingeniero de sistemas, enfocado en el desarrollo de experiencias web tanto atractivas como funcionales.
              </p>
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center flex-col gap-4">
          <h2 className="text-2xl font-bold">Mis habilidades</h2>
          <div className="flex gap-2 flex-wrap">
            {skillsData.map((e, i) => (
              <div key={i} className="bg-gray-200 p-1 rounded-lg text-[16px]">{e.title}</div>
            ))}
          </div>
        </section>
        <section className="flex justify-center items-center flex-col gap-4">
          <h2 className="text-2xl font-bold">Educación</h2>
          <div className="w-full flex flex-col md:flex-row md:grid md:grid-cols-12 md:gap-x-4">
            {educationData.map((e, i) => (
              <div key={i} className="border-solid border-gray-200 border-1 p-4 rounded-lg mb-4 flex flex-col gap-y-2 md:col-span-6 hover:shadow-md">
                <h3 className="font-semibold">{e.title}</h3>
                <p>{e.institution}</p>
                <p>{e.startDate} - {e.endDate}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
