import { GeneralModal } from "../components/general/Modal";
import { useEffect, useState } from "react";
import { skillsData, educationData } from "./../data/index"


export function About() {

  const professionalData = [
    {
      id: 1,
      question: "¿Quién soy?",
      answer: " Soy Brayan Camilo Annear Cuta, soy ingeniero de sistemas con experiencia y conocimientos en desarrollo web full stack. Cuento con 2 años de experiencia en el desarrollo de aplicaciones web, manejando tanto frontend en mayor medida como backend. Me apasiona aprender nuevas tecnologías y mejorar mis habilidades constantemente.",
    },
    {
      id: 2,
      question: "¿Qué tecnologías manejo?",
      answer: "A nivel profesional tengo experiencia en tecnologías como Html, Css, JavaScript, TypeScript, Postman, React, Nextjs, tailwindcss .net core 8.0(proyectos webapi). De forma empirica he trabajado en proyectos con AngualarJs(versuiones superiores a la 17) y Laravel 11. A nivel de bases de datos he manejado profesionalmente MYSQL con xampp(apache) y SQL Server, adicionalmente por la universidad manejé postgresql. En cuanto a control de versiones, he trabajado con Git y GitHub, lo que me ha permitido llevar un control adecuado de los proyectos en los que he trabajado. Finalmente, he estado en entornos en los que se maneja el marco de trabajo SCRUM, lo que me ha permitido trabajar en equipo de manera efectiva y cumplir con los plazos establecidos.",
    },
    {
      id: 3,
      question: "¿Cuál es mi enfoque?",
      answer: "En mis años de experiencia, me he desempeñado en mayor medida como frontend es por esto que soy una persona más versatil en frameworks de frontend, no obstante, me considero una persona proactiva, es por esto que busqué la forma de integrarme al backend, lo que me ha permitido conocer más sobre el flujo de desarollo de proyectos, he construido algunos endpoints con integraciones en mi antiguo trabajo, conozco conceptos como ORM, DTO's, inyección de dependencias.",
    },
    {
      id: 4,
      question: "¿Qué quiero reforzar?",
      answer: "Me considero una persona muy exigente conmigo mismo, es por esto que entiendo que debo estar en constante aprendizaje para ser un profesional más completo. Considero que a nivel de backend debo reforzar y perfeccionar mis conocimientos, por otro lado a nivel de devops me gustaría conocer más allá de lo superficial. ",
    },
    {
      id: 5,
      question: "¿Qué viene para el futuro?",
      answer: "Mi intención es seguir creciendo como profesiona, es por esto que en un mediano plazo me gustaría formarme como arquitecto de software, esto con la intención de poder diseñar, liderar y desarrollar proyectos complejos de alta calidad.",
    },
    {
      id: 6,
      question: "¿Qué busco de una empresa?",
      answer: "Busco una empresa que me permita seguir creciendo como profesional, que me brinde la oportunidad de aprender y mejorar mis habilidades constantemente.",
    }

  ]
  const [activeModal, setActiveModal] = useState(false);
  const [modalContent, setModalContent] = useState({title: "", url: ""});

  const handleEducationAction = (url: string, title:string) => {
    setActiveModal(true);
    setModalContent({title:title, url:url});
  }
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    }
  },[activeModal]);
  
  return (
    <>
      <div className="px-4 md:px-8 lg:px-12 xl:px-80 mt-12 flex flex-col gap-y-8">
        {activeModal &&
          <GeneralModal actveModal={activeModal} setActiveModal={setActiveModal} internalClassAditional="h-fit p-4 md:h-full md:p-0" classAdditional="h-fit md:h-[80%]" title={modalContent.title}>
            <iframe
              src={modalContent.url}
              width="100%"
              height="100%"
              title="Diploma"
              className="hidden rounded-lg md:block"
              frame-ancestors="none"
            />
            <a href={modalContent.url} target="_blank" className="block md:hidden bg-[#1f2937] p-2 text-white rounded-lg hover:bg-[#111827]" >
              Abrir en una nueva pestaña
            </a>
          </GeneralModal>

        }
        <section className="flex gap-y-4 flex-col ">
          <h1 className="text-4xl font-bold flex justify-center">Sobre mí</h1>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex-1 h-fit">
              <img
                src="https://raw.githubusercontent.com/BCamilo17/portfolio-content/refs/heads/main/imagen-portfolio.webp"
                alt="Brayan Camilo Annear Cuta"
                className="w-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 flex flex-col gap-y-4">
              {professionalData.map((e) => (
                <div key={e.id}>
                  <h2 className="font-semibold">{e.question}</h2>
                  <p>{e.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center flex-col gap-4">
          <h2 className="text-2xl font-bold">Mis habilidades</h2>
          <div className="flex gap-2 flex-wrap">
            {skillsData.map((e, i) => (
              <div key={i} className="bg-gray-200 p-1 rounded-lg text-[16px] text-black transition delay-150 duration-150 hover:-translate-y-1">{e.title}</div>
            ))}
          </div>
        </section>
        <section className="flex justify-center items-center flex-col gap-4">
          <h2 className="text-2xl font-bold">Educación</h2>
          <div className="w-full flex flex-col md:flex-row md:grid md:grid-cols-12 md:gap-x-4">
            {educationData.map((e, i) => (
              <div key={i} className="border-solid border-gray-200 border-1 p-4 rounded-lg mb-4 flex flex-col gap-y-2 md:col-span-6 hover:shadow-md transition delay-150 duration-150 hover:-translate-y-1 cursor-pointer" onClick={() => { handleEducationAction(e.url, e.title) }}>
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
