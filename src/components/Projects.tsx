import React from "react";
import {
  ExternalLink,
  Database,
  BarChart3,
  Zap,
  Github,
  Eye,
} from "lucide-react";

const projectsData = [
  {
    title: "Data Warehousing",
    description:
      "Leveraged ERP systems, transaction records, and designed and maintained data pipelines to optimize customer engagement and business intelligence. Proficient in using both SQL and NoSQL databases to manage and analyze data efficiently. Applied advanced SQL techniques including JOINs, CRUD operations, stored procedures, window functions, reports, and triggers to support data integration, programmable automation, and reporting needs.",
    image: "Img/Data warehouse.jpeg",
    tags: ["SQL", "Data Pipelines", "ERP"],
    icon: Database,
    gradient: "from-purple-600 to-blue-600",
  },
  {
    title: "Data Analytics",
    description:
      "Designed and implemented advanced analytical models to extract insights, identify patterns, and support data-driven decision-making across various domains using historical and real-time data.",
    image: "Img/Data Analyst.jpg",
    tags: ["Data Analysis", "Business Intelligence", "Visualization"],
    icon: BarChart3,
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    title: "FastAPI Web Application",
    description:
      "Developed a basic web application using FastAPI with full CRUD operations and data validation using Pydantic. Implemented secure authentication and authorization using JWT tokens, enabling protected routes and user role handling. Focused on building RESTful endpoints for efficient data management and access control.",
    image: "Img/Fast-api.jpg",
    tags: ["FastAPI", "Python", "JWT", "REST"],
    icon: Zap,
    gradient: "from-green-600 to-teal-600",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Eye className="w-6 h-6 text-purple-400 animate-pulse" />
            <span className="text-purple-400 font-medium">My Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 transform hover:-translate-y-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Hover actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex space-x-4">
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200 transform hover:scale-110">
                      <ExternalLink size={20} />
                    </button>
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200 transform hover:scale-110">
                      <Github size={20} />
                    </button>
                  </div>
                </div>

                {/* Icon badge */}
                <div className="absolute top-4 left-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 line-clamp-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-700/50 border border-gray-600/50 text-purple-300 rounded-full text-sm font-medium hover:bg-purple-600/20 hover:border-purple-500/50 hover:text-purple-200 transition-all duration-200 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom glow effect */}
              <div
                className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
