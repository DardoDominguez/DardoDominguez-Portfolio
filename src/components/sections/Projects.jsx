import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Proyectos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> CRM Básico</h3>
              <p className="text-gray-400 mb-4">
              El proyecto consiste en la creación de un CRM Básico que facilita el análisis de ventas, 
              el rendimiento de los empleados y las tendencias de un negocio mediante dashboards intuitivos y personalizados.
              </p>
              <video
                className="w-full rounded-lg mb-4"
                controls
                src="/path/to/crm-basico.mp4"
              >
                Tu navegador no soporta la reproducción de videos.
              </video>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Microsoft Excel", "Power BI"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://project.novypro.com/Sh3ht6"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Ver Proyecto →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Análisis Cognitivo del Sueño y Estrés</h3>
              <p className="text-gray-400 mb-4">
              El proyecto analiza cómo el sueño, el estrés y la regulación emocional afectan el rendimiento cognitivo, 
              específicamente en el tiempo de reacción, 
              proporcionando insights valiosos para mejorar la toma de decisiones en contextos de alta exigencia mental.
              </p>
              <video
                className="w-full rounded-lg mb-4"
                controls
                src="/path/to/analisis-cognitivo.mp4"
              >
                Tu navegador no soporta la reproducción de videos.
              </video>
              <div className="flex flex-wrap gap-2 mb-4">
                {["SQL", "Microsoft Excel", "Power BI"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://project.novypro.com/qkgJM2"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Ver Proyecto →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Estado de Resultados</h3>
              <p className="text-gray-400 mb-4">
                Estado de Resultados realizado para Grupo Empresarial.
              </p>
              <video
                className="w-full rounded-lg mb-4"
                controls
                src="/path/to/estado-resultados.mp4"
              >
                Tu navegador no soporta la reproducción de videos.
              </video>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Microsoft Excel"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://frsfutneduar-my.sharepoint.com/:x:/g/personal/ddominguez_frsf_utn_edu_ar/Ed-YfF4DuVdNh3Ex4L7s8zcBCXYBzrH17Z8_T7HNntsimg?e=nBNpbp"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Ver Proyecto →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Dashboard Dinámico en Microsoft Excel</h3>
              <p className="text-gray-400 mb-4">
                Dashboard dinámico en Excel para empresa de ingeniería, que permite
                analizar y visualizar datos de manera interactiva, facilitando la toma de decisiones informadas.
              </p>
              <video
                className="w-full rounded-lg mb-4"
                controls
                src="C:\Users\Dardo\Downloads\202504140953.mp4"
              >
                Tu navegador no soporta la reproducción de videos.
              </video>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Excel", "Power Query", "Power Pivot"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Ver Proyecto →
                </a>
              </div>
            </div> 

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
