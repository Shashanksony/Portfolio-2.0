import React from "react";
import { Github, Linkedin, Mail, ArrowUp, Heart, Code } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              {/* <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Shashank Sony
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              SQL Developer | Data Analyst | Python Developer
              <br />
              <span className="text-purple-400">
                Building the future with data and code
              </span>
            </p>
            <div className="flex space-x-4">
              {[
                {
                  href: "https://github.com/Shashanksony",
                  icon: Github,
                  color: "hover:bg-purple-600",
                },
                {
                  href: "https://linkedin.com/in/shashanksony",
                  icon: Linkedin,
                  color: "hover:bg-blue-600",
                },
                {
                  href: "mailto:shashanksony82@gmail.com",
                  icon: Mail,
                  color: "hover:bg-green-600",
                },
              ].map(({ href, icon: Icon, color }, index) => (
                <a
                  key={index}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className={`p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl ${color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["about", "expertise", "projects"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="group text-gray-300 hover:text-purple-400 transition-all duration-200 flex items-center space-x-2"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-purple-500 transition-all duration-300"></span>
                    <span className="capitalize">{section}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-white">
              Get In Touch
            </h4>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Let's discuss your next data project or FastAPI development needs.
              I'm always excited to work on challenging problems.
            </p>
            <a
              href="mailto:shashanksony82@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 text-center md:text-left mb-4 md:mb-0">
            <span>© 2024 Shashank Sony. Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and lots of coffee</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:bg-purple-600 hover:border-purple-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
