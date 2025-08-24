import React, { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsComplete(true);
          setTimeout(() => onComplete(), 800);
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center transition-all duration-1000 ${
        isComplete ? "opacity-0 pointer-events-none scale-110" : ""
      }`}
    >
      <div className="text-center relative">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Main loading animation */}
        <div className="relative mb-8">
          <div className="w-40 h-40 rounded-full border-4 border-transparent border-t-purple-400 border-r-blue-400 animate-spin"></div>
          <div
            className="absolute inset-0 w-40 h-40 rounded-full border-4 border-transparent border-l-pink-400 border-b-cyan-400 animate-spin animate-reverse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute inset-6 w-28 h-28 rounded-full border-4 border-transparent border-t-purple-300 border-r-pink-300 animate-spin"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="absolute inset-12 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
        </div>

        <div className="mb-6">
          <h2 className="text-white text-3xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Shashank Sony
          </h2>
          <p className="text-purple-200 text-lg">Loading Portfolio...</p>
        </div>

        {/* Progress bar */}
        <div className="w-80 h-3 bg-gray-800 rounded-full overflow-hidden border border-purple-500/30">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full transition-all duration-300 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>
        </div>

        <p className="text-purple-300 mt-4 text-xl font-semibold">
          {Math.round(progress)}%
        </p>

        {/* Floating elements */}
        <div
          className="absolute -top-20 -left-20 w-4 h-4 bg-purple-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute -top-16 -right-16 w-3 h-3 bg-pink-500 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute -bottom-20 -left-16 w-5 h-5 bg-cyan-500 rounded-full animate-bounce"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
