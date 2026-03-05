import { FaEnvelope, FaPhone, FaCalendarAlt, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <aside className="bg-[#1e1e1f] p-8 rounded-[30px] border border-[#383838] w-full lg:w-[280px] h-fit sticky top-10 flex flex-col items-center shadow-2xl">
      
      {/* Avatar Container - Rounded corners like the image */}
      <div className="bg-[#383838] p-4 rounded-[30px] mb-5 shadow-inner">
        <div className="w-24 h-24 bg-[#454545] rounded-[22px] flex items-center justify-center text-5xl overflow-hidden">
         
          <img src="/me.jpeg" alt="Karishma" className="w-full h-full " />
          
        </div>
      </div>

      <h1 className="text-[22px] font-bold text-center tracking-wide text-white whitespace-nowrap">
        Karishma Singh
      </h1>
      
      <p className="bg-[#2b2b2c] text-[11px] text-[#ffdb70] px-4 py-1.5 rounded-[10px] mt-3 uppercase font-medium tracking-wider">
        Web Developer
      </p>

      <div className="w-full h-[1px] bg-[#383838] my-8"></div>

      {/* Info List */}
      <div className="w-full space-y-2">
        {/* Email Link */}
        <a href="mailto:karishmasingh58638@gmail.com" className="group block">
          <InfoItem 
            icon={<FaEnvelope />} 
            label="EMAIL" 
            value="karishmasingh@gmail.com" 
          />
        </a>

        {/* Phone Link */}
        <a href="tel:+919528457228" className="group block">
          <InfoItem 
            icon={<FaPhone />} 
            label="PHONE" 
            value="+91 9528457228" 
          />
        </a>

        <InfoItem icon={<FaCalendarAlt />} label="BIRTHDAY" value="July 5,2005" />
        
        <InfoItem icon={<FaMapMarkerAlt />} label="LOCATION" value="Moradabad, India" />
      </div>

      {/* Social Media Links - Sticky at the bottom of sidebar */}
      <div className="flex gap-4 mt-8">
        <SocialIcon href="https://github.com/KarishmaEngg" icon={<FaGithub />} />
        <SocialIcon href="https://www.linkedin.com/in/karishma-singh-817580279/" icon={<FaLinkedin />} />
        <SocialIcon href="https://www.instagram.com/_karishmasingh_1/" icon={<FaInstagram />} />
      </div>
    </aside>
  );
}

// Info Item Component
function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 overflow-hidden py-3">
      <div className="p-3 bg-[#2b2b2c] rounded-[12px] text-[#ffdb70] text-[14px] shadow-sm group-hover:bg-[#383838] transition-all border border-[#383838]">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[10px] text-[#a6a6a6] mb-0.5 font-medium tracking-wide">{label}</p>
        <p className="text-[13px] text-white truncate font-light group-hover:text-[#ffdb70] transition-colors">
          {value}
        </p>
      </div>
    </div>
  );
}

// Social Icon Component
function SocialIcon({ href, icon }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-[#d6d6d6]/70 hover:text-[#ffdb70] transition-all text-lg p-1"
    >
      {icon}
    </a>
  );
}