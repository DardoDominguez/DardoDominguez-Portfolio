import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const hardSkills = [
    "Microsoft Excel",
    "SQL",
    "Python",
    "Power BI",
    "Tableau",
  ];

  const softSkills = ["Comunicación efectiva", "Trabajo en equipo", "Resolución de problemas", "Adaptabilidad", "Gestión del tiempo"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Sobre Mí
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
            Apasionado por la Ciencia de Datos y la Tecnología, 
            especializado en desarrollar soluciones efectivas que potencian el crecimiento y la innovación.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Competencias Técnicas</h3>
                <div className="flex flex-wrap gap-2">
                  {hardSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Habilidades Interpersonales</h3>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Educación </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Ingeniería en Sistemas de Información </strong> - Universidad Tecnológica Nacional
                  (2021-Actualidad)
                </li>
                <li>
                  Bachiller en Economía y Administración - E.E.S.O.P.I. N° 8113 "Instituto Reconquista"
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Experiencia Laboral </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Analista de Sistemas Financieros - Inversiones S&M (2025 - Actualidad){" "}
                  </h4>
                  <p>
                    Desarrollo de automatizaciones en Excel para la generación automática de Estados Contables y KPIs Financieros.
                    Creación de Reportes e Informes para la toma de decisiones.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Becario Unviersitario de Soporte IT - Universidad Tecnológica Nacional (2022-2024){" "}
                  </h4>
                  <p>
                  Manejo de Office, reparación de dispositivos, instalación y actualización de software, 
                  mantenimiento de laboratorios, organización de la competencia Tecnomate, 
                  gestión de solicitudes de uso de laboratorios y uso de Redmine para proyectos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
