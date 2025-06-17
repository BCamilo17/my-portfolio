import { GeneralModal } from "../components/general/Modal";
import { useEffect, useState } from "react";
import { skillsData, educationData, professionalData } from "./../data/index"
import { scrollFunction } from "../utils";


export function About() {
  // State to manage the modal visibility and content
  const [activeModal, setActiveModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", url: "" });

  const handleEducationAction = (url: string, title: string) => {
    setActiveModal(true);
    setModalContent({ title: title, url: url });
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
  }, [activeModal]);

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
                src="https://raw.githubusercontent.com/BCamilo17/portfolio-content/refs/heads/main/images/imagen-perfil.webp"
                alt="Brayan Camilo Annear Cuta"
                className="w-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 flex flex-col gap-y-4">
              <button className="md:hidden animate-bounce"> <span className="material-symbols-outlined" onClick={()=>{scrollFunction("education-information")}}>keyboard_arrow_down</span></button>
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
        <section id="education-information" className="flex justify-center items-center flex-col gap-4">
          <h2 className="text-2xl font-bold">Educación</h2>
          <div className="w-full flex flex-col md:flex-row md:grid md:grid-cols-12 md:gap-x-4">
            {educationData.map((e, i) => (
              <a key={i} className="border-solid border-gray-200 border-1 p-4 rounded-lg mb-4 flex flex-col gap-y-2 md:col-span-6 hover:shadow-md transition delay-150 duration-150 hover:-translate-y-1 cursor-pointer" onClick={() => { handleEducationAction(e.url, e.title) }}>
                <h3 className="font-semibold">{e.title}</h3>
                <p>{e.institution}</p>
                <p>{e.startDate} - {e.endDate}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
