import {skillsData} from "./../data/index"

export function About() {


  return (
    <>
      <div>
        <h1 className="text-4xl font-bold">Sobre mí</h1>
        <div className="grid grid-cols-12 gap-4">
          <div className="bg-gray-600 col col-span-12 md:col-span-6 h-[200px] ">
        
          </div>
          <div className="col col-span-12 md:col-span-6">
              <h2>Brayan Camilo Annear Cuta</h2>
              <p>Desarrollador web full stack</p>
              <p>
                Soy ingeniero de sistemas, enfocado en el desarrollo de experiencias web tanto atractivas como funcionales.
              </p>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold">Mis habilidades</h2>
      <div className="flex gap-2 flex-wrap ">
        {skillsData.map((e)=>(
          <div className="bg-gray-200 p-1 rounded-lg text-[16px]">{e.title}</div>
        ))}
      </div>
      <h2 className="text-2xl font-bold">Educación</h2>
      <div>
        
      </div>
    </>
  )
}
