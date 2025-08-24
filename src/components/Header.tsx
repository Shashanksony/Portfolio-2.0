import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, Code } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-purple-500/10 py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="flex-shrink-0 group">
              <div className="flex items-center space-x-2">
                {/* <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <Code className="w-6 h-6 text-white" />
                </div> */}
                <h1
                  className={`text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-300 ${
                    isScrolled ? "scale-90" : ""
                  }`}
                >
                  Shashank Sony
                </h1>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {["about", "expertise", "projects"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="relative text-gray-300 hover:text-white transition-colors duration-300 font-medium capitalize group"
                >
                  {section}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}

              <div className="flex items-center space-x-4 ml-8">
                {[
                  {
                    href: "https://github.com/Shashanksony",
                    icon: Github,
                    color: "hover:text-purple-400",
                  },
                  {
                    href: "https://linkedin.com/in/shashanksony",
                    icon: Linkedin,
                    color: "hover:text-blue-400",
                  },
                  {
                    href: "mailto:shashanksony82@gmail.com",
                    icon: Mail,
                    color: "hover:text-green-400",
                  },
                ].map(({ href, icon: Icon, color }, index) => (
                  <a
                    key={index}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 ${color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <button
              className="md:hidden p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-30 transform transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-gray-900/95 backdrop-blur-xl border-l border-gray-700/50 shadow-2xl">
          <div className="p-6 pt-24">
            <div className="space-y-8">
              {["about", "expertise", "projects"].map((section, index) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left text-xl font-medium text-gray-300 hover:text-white transition-all duration-300 py-4 border-b border-gray-700/50 hover:border-purple-500/50 capitalize transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {section}
                </button>
              ))}

              <div className="flex items-center space-x-4 pt-8">
                {[
                  {
                    href: "https://github.com/Shashanksony",
                    icon: Github,
                    color: "hover:bg-purple-500",
                  },
                  {
                    href: "https://linkedin.com/in/shashanksony",
                    icon: Linkedin,
                    color: "hover:bg-blue-500",
                  },
                  {
                    href: "mailto:shashanksony82@gmail.com",
                    icon: Mail,
                    color: "hover:bg-green-500",
                  },
                ].map(({ href, icon: Icon, color }, index) => (
                  <a
                    key={index}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:text-white ${color} transition-all duration-300 transform hover:scale-110`}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
