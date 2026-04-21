import { FaCode, FaMobileAlt, FaCamera, FaLayerGroup, FaDatabase } from 'react-icons/fa';

export default function About() {
  return (
    <section>
      <h2 className="text-[32px] font-bold mb-4 relative pb-4">
        About Me
        <span className="absolute bottom-0 left-0 w-10 h-1.5 bg-[#ffdb70] rounded-full"></span>
      </h2>

      <div className="text-[#d6d6d6] text-[15px] leading-relaxed space-y-4 mt-8">
        <p>"I am a Full-Stack Developer based in Moradabad, India. I specialize in building scalable, responsive web applications using the MERN stack and Next.js. My approach blends clean, functional code with aesthetic UI/UX design to deliver high-quality digital experiences. Passionate about solving complex problems and continuously learning new technologies."</p>
      </div>

      <h3 className="text-[24px] font-bold mt-10 mb-6">What I&apos;m Doing</h3>
      
      {/* Grid for Services: Same size cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <ServiceCard 
          icon={<FaLayerGroup />} 
          title="Web Design" 
          desc="The most modern and high-quality design made at a professional level." 
        />
        <ServiceCard 
          icon={<FaCode />} 
          title="Web Development" 
          desc="High-quality development of sites at the professional level." 
        />
        <ServiceCard 
          icon={<FaMobileAlt />} 
          title="Mobile Apps" 
          desc="Professional development of applications for iOS and Android." 
        />
        <ServiceCard 
          icon={<FaDatabase />} 
          title= "Database Management"
          desc="Expertise in designing robust schemas using MongoDB and PostgreSQL for efficient data handling."
        />
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="bg-[#212123] p-6 rounded-[18px] border border-[#383838] flex gap-4 items-start shadow-sm hover:shadow-md transition-all">
      <div className="text-[#ffdb70] text-3xl mt-1">{icon}</div>
      <div>
        <h4 className="font-bold text-[18px] mb-1">{title}</h4>
        <p className="text-[#d6d6d6] text-[14px] leading-snug">{desc}</p>
      </div>
    </div>
  );
}