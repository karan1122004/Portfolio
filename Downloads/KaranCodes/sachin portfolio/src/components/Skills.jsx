import { motion } from 'framer-motion';
import { Settings, Cpu, Database } from 'lucide-react';

const skills = [
  { 
    category: 'Languages', 
    icon: <Cpu size={32} strokeWidth={3} />,
    color: 'bg-[#f43f5e]',
    items: [
      { name: 'C++', percentage: 90 },
      { name: 'Java', percentage: 85 },
      { name: 'Python', percentage: 80 },
      { name: 'JavaScript', percentage: 85 }
    ]
  },
  { 
    category: 'Frameworks', 
    icon: <Settings size={32} strokeWidth={3} />,
    color: 'bg-[#0ea5e9]',
    items: [
      { name: 'React', percentage: 80 },
      { name: 'Node.js', percentage: 75 }
    ]
  },
  { 
    category: 'Tools / DB', 
    icon: <Database size={32} strokeWidth={3} />,
    color: 'bg-[#f59e0b]',
    items: [
      { name: 'MySQL', percentage: 85 },
      { name: 'MongoDB', percentage: 75 },
      { name: 'GitHub', percentage: 90 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-start mb-16"
        >
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-7xl font-bold uppercase text-black text-shadow-brutal bg-[#f59e0b] px-6 py-2 border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] z-10 relative transform rotate-1">
              SKILLS
            </h2>
            <div className="absolute top-1/2 -right-16 w-12 h-2 bg-red-500 border-2 border-black transform -rotate-12"></div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="brutal-card p-0 flex flex-col h-full bg-white divide-y-4 divide-black overflow-hidden"
            >
              {/* Card Header (MacOS Style) */}
              <div className={`p-4 ${skillGroup.color} flex justify-between items-center text-white border-b-4 border-black shadow-[0_4px_0_0_rgba(0,0,0,1)]`}>
                <h3 className="text-2xl font-black uppercase tracking-wide flex items-center gap-3">
                  {skillGroup.icon}
                  {skillGroup.category}
                </h3>
              </div>
              
              <div className="p-8 flex flex-col gap-8 flex-grow">
                {skillGroup.items.map((item, i) => (
                  <div key={item.name} className="flex flex-col gap-3">
                    <div className="flex justify-between items-center font-bold text-lg uppercase">
                      <span>{item.name}</span>
                      <span className="bg-black text-white px-2 py-1 rounded-sm text-sm border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,0.5)]">{item.percentage}%</span>
                    </div>
                    {/* Brutal Progress Bar */}
                    <div className="w-full bg-white border-2 border-black h-5 overflow-hidden rounded-full shadow-[inset_2px_2px_0_0_rgba(0,0,0,0.2)]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 + index * 0.2, ease: "easeOut" }}
                        className={`h-full border-r-2 border-black ${skillGroup.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
