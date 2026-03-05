import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

export default function Resume() {
  const education = [
    {
      title: "Moradabad Institute Of Technology",
      date: "2022 — 2026",
      desc: "Bachelor's in Computer Science and Technology.",
    },
    {
      title: "K.B.V.M Inter College",
      date: "2021 — 2022",
      desc: "completed class 12th in PCM.",
    },
    {
      title: "K.B.V.M Inter College",
      date: "2019 — 2020",
      desc: "completed class 10th in Science.",
    },
  ];

  const skills = [
    { name: "Web Development", level: "80%" },
    { name: "App Development", level: "50%" },
    { name: "Java", level: "70%" },
    { name: "DSA", level: "70%" },
  ];

  return (
    <section className="animate-in fade-in duration-500">
      {/* Page Header */}
      <header>
        <h2 className="text-3xl font-bold text-white mb-2">Resume</h2>
        <div className="w-10 h-1.5 bg-[#ffdb70] rounded-full mb-8"></div>
      </header>

      {/* Education & Experience Sections */}
      <div className="space-y-12">
        {/* Education Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-[#2b2b2c] rounded-xl text-[#ffdb70] shadow-sm border border-[#383838]">
              <FaGraduationCap size={20} />
            </div>
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>

          <div className="ml-7 border-l border-[#383838] space-y-10 pl-8 relative">
            {education.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-1 w-3 h-3 bg-[#ffdb70] rounded-full border-[3px] border-[#1e1e1f] shadow-[0_0_0_4px_#383838]"></div>
                
                <h4 className="text-[16px] font-bold text-white leading-snug">{item.title}</h4>
                <p className="text-[#ffdb70] text-[14px] font-medium my-1">{item.date}</p>
                <p className="text-[#d6d6d6] text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section (Placeholder as per image) */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-[#2b2b2c] rounded-xl text-[#ffdb70] shadow-sm border border-[#383838]">
              <FaBriefcase size={20} />
            </div>
            <h3 className="text-2xl font-bold text-white">Experience</h3>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-14">
        <h3 className="text-2xl font-bold text-white mb-8">My Skills</h3>
        
        <div className="bg-[#212123] p-8 rounded-[25px] border border-[#383838] shadow-sm">
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-white font-bold text-[15px]">{skill.name}</span>
                  <span className="text-[#a6a6a6] text-[14px] font-medium">{skill.level}</span>
                </div>
                
                {/* Progress Bar Container */}
                <div className="w-full bg-[#383838] h-[8px] rounded-full overflow-hidden">
                  <div 
                    className="bg-[#ffdb70] h-full rounded-full transition-all duration-1000" 
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}