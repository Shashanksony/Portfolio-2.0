import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero: React.FC = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const texts = [
    "Building scalable data solutions",
    "Analyzing complex datasets",
    "Developing FastAPI applications",
    "Creating database architectures",
    "Automating data workflows",
  ];

  useEffect(() => {
    const currentText = texts[currentIndex % texts.length];

    if (isTyping) {
      if (typewriterText.length < currentText.length) {
        const timer = setTimeout(() => {
          setTypewriterText(currentText.slice(0, typewriterText.length + 1));
        }, 100);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timer);
      }
    } else {
      if (typewriterText.length > 0) {
        const timer = setTimeout(() => {
          setTypewriterText(typewriterText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        setIsTyping(true);
        setCurrentIndex((prev) => prev + 1);
      }
    }
  }, [typewriterText, isTyping, currentIndex]);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    alert(`Thank you for subscribing with email: ${email}`);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-black pt-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeInUp">
            <div className="space-y-6">
              {/* <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
                <span className="text-purple-400 font-medium"></span>
              </div> */}

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Hey, I'm a{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                  Python & SQL Developer
                </span>
                , FastAPI Enthusiast, and Data Analyst with NoSQL Expertise.
              </h1>

              <div className="h-20 flex items-center">
                <p className="text-xl md:text-2xl text-gray-300 font-medium">
                  <span className="text-purple-400">→</span> {typewriterText}
                  <span className="animate-pulse text-purple-400">|</span>
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4 max-w-md"
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-6 py-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 focus:bg-gray-800/70"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <button
                type="submit"
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 font-medium shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center space-x-2"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
            <p className="text-gray-400">
              Subscribe to receive updates on my latest projects and tech
              insights.
            </p>
          </div>

          <div
            className="relative animate-fadeInUp"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Animated rings */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full animate-spin-reverse"></div>
              <div className="absolute inset-8 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 rounded-full animate-pulse"></div>

              <img
                src="Img\Screenshot 2024-09-09 120041.jpg"
                alt="Shashank Sony - Professional Profile"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-gray-700/50 shadow-2xl hover:scale-105 transition-all duration-500 hover:border-purple-500/50"
              />

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 w-28 h-28 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold shadow-2xl animate-bounce border-4 border-gray-800">
                <div className="text-center">
                  <div className="text-lg">2+</div>
                  <div className="text-xs">Years</div>
                </div>
              </div>

              {/* Floating particles */}
              <div className="absolute top-10 -left-6 w-3 h-3 bg-purple-500 rounded-full animate-float"></div>
              <div
                className="absolute bottom-16 -right-8 w-2 h-2 bg-pink-500 rounded-full animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 -left-10 w-4 h-4 bg-cyan-500 rounded-full animate-float"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
