import React from 'react';
import { Database, TrendingUp, Code, Layers, Star } from 'lucide-react';

const expertiseData = [
  {
    icon: Database,
    title: 'SQL Development',
    description: 'Proficient in writing complex and advanced SQL queries, including the use of window functions, CTEs, stored procedures, and triggers. Experienced in query optimization and performance tuning for large datasets.',
    badge: 'Advanced',
    badgeColor: 'from-purple-600 to-purple-700',
    glowColor: 'shadow-purple-500/20'
  },
  {
    icon: TrendingUp,
    title: 'Data Analysis',
    description: 'Experienced in analyzing and interpreting data using tools like Excel, Word, and PowerPoint. Proficient in using Power BI for data visualization and reporting. Skilled in querying and analyzing data from both SQL and NoSQL databases to generate actionable insights.',
    badge: 'Expert',
    badgeColor: 'from-blue-600 to-blue-700',
    glowColor: 'shadow-blue-500/20'
  },
  {
    icon: Code,
    title: 'Python Programming',
    description: 'Proficient in fundamental and advanced Python programming concepts, including scripting, automation, data analysis, and backend development. Experienced in using libraries such as Pandas, NumPy, and FastAPI for building APIs and data-driven applications.',
    badge: 'Proficient',
    badgeColor: 'from-indigo-600 to-indigo-700',
    glowColor: 'shadow-indigo-500/20'
  },
  {
    icon: Layers,
    title: 'Project Management',
    description: 'Skilled in managing and maintaining multiple databases, ensuring data consistency and security. A proactive challenge acceptor who thrives under pressure, consistently delivering solutions to complex data and project issues.',
    badge: 'Skilled',
    badgeColor: 'from-green-600 to-green-700',
    glowColor: 'shadow-green-500/20'
  }
];

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="w-6 h-6 text-purple-400 animate-pulse" />
            <span className="text-purple-400 font-medium">What I Do Best</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-6 cursor-pointer hover:shadow-2xl ${item.glowColor}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Badge */}
              <div className={`absolute top-4 right-4 bg-gradient-to-r ${item.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}>
                {item.badge}
              </div>
              
              {/* Icon */}
              <div className="mb-6 relative">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 border border-gray-600/50 group-hover:border-purple-500/50">
                  <item.icon className="w-10 h-10 text-purple-400 group-hover:text-white transition-colors duration-300" />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {item.description}
              </p>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              {/* Floating particles */}
              <div className="absolute top-6 right-16 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
              <div className="absolute bottom-8 left-6 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" style={{ animationDelay: '0.5s' }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;