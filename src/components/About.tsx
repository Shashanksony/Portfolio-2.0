import React from "react";
import {
  MapPin,
  Mail,
  Download,
  MessageSquare,
  User,
  Award,
} from "lucide-react";

const About: React.FC = () => {
  const techStack = [
    { name: "SQL", color: "from-blue-500 to-blue-600" },
    { name: "Python", color: "from-yellow-500 to-yellow-600" },
    { name: "FastAPI", color: "from-green-500 to-green-600" },
    { name: "MongoDB", color: "from-green-600 to-green-700" },
    { name: "Power BI", color: "from-yellow-600 to-orange-600" },
    { name: "Office 365", color: "from-blue-600 to-blue-700" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <User className="w-6 h-6 text-purple-400 animate-pulse" />
            <span className="text-purple-400 font-medium">Get to Know Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="relative w-80 h-80 mx-auto">
              {/* Animated background rings */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-cyan-500/15 to-purple-500/15 rounded-2xl -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
              <div className="absolute inset-8 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 rounded-2xl rotate-2 group-hover:rotate-4 transition-transform duration-500"></div>

              <img
                src="Img\Screenshot 2024-09-09 120041.jpg"
                alt="Shashank Sony - About"
                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl hover:scale-105 transition-all duration-500 border-2 border-gray-700/50 hover:border-purple-500/50"
              />

              {/* Experience badge */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-bold shadow-2xl border-4 border-gray-800 group-hover:scale-110 transition-transform duration-300">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span>2+ Years Experience</span>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-8 -left-4 w-3 h-3 bg-purple-500 rounded-full animate-float"></div>
              <div
                className="absolute bottom-12 -right-6 w-2 h-2 bg-pink-500 rounded-full animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 -right-8 w-4 h-4 bg-cyan-500 rounded-full animate-float"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">
                Shashank Sony
              </h3>
              <p className="text-xl text-purple-400 font-semibold mb-4">
                SQL and Python Developer at Plus Distribution Private Limited
              </p>
              <p className="text-lg text-gray-300 italic mb-6 leading-relaxed">
                "Dedicated SQL Developer, Data Analyst, Python Developer, and
                FastAPI Expert with proficiency in database management,
                analytics, and API development."
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <MessageSquare className="w-6 h-6 text-purple-400" />
                <span>Contact Information</span>
              </h4>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">
                    <strong className="text-white">Location:</strong> New Delhi
                  </span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">
                    <strong className="text-white">Email:</strong>
                    <a
                      href="mailto:shashanksony82@gmail.com"
                      className="text-purple-400 hover:text-purple-300 ml-2 transition-colors duration-200"
                    >
                      shashanksony82@gmail.com
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-6">Tech Stack</h4>
              <div className="grid grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="group relative p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-white font-bold text-lg">
                        {tech.name.charAt(0)}
                      </span>
                    </div>
                    <p className="text-center text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                      {tech.name}
                    </p>

                    {/* Hover glow effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="Img\Shashank-2.pdf"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 font-medium shadow-lg hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download CV
              </a>
              <a
                href="mailto:shashanksony82@gmail.com"
                className="group inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-xl hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 transform hover:scale-105 font-medium"
              >
                <MessageSquare className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
