"use client";
import { useState } from 'react';
import { FaEye } from 'react-icons/fa';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

const projects = [
    {   
      title: "FoodiiZone", 
      category: "Web development", 
      img: "/projects/foodiezone.jpg", 
      link: "https://food-order-app-ochre-pi.vercel.app/"
    },
    { 
      title: "SkillLearn LMS Portal", 
      category: "Web development", 
      img: "/projects/lms.png", 
      link: "https://lms-da6a.vercel.app/"
    },
    { 
      title: "MedixFlow: Healthcare E-commerce Platform", 
      category: "Web development", 
      img: "/projects/alhawat.png", 
      link: "https://medix-flow.vercel.app/" 
    },
    { 
      title: "LuxeSpace: Luxury Interior Showcase", 
      category: "Web design", 
      img: "/projects/psdecor.jpg",
      link: "https://ps-decor-clone-nizu.vercel.app/"
    },
    { 
      title: "Salary Prediction", 
      category: "Applications", 
      img: "/projects/salary.jpg", 
      link: "https://karishmaengg-salary-prediction-system-app-3bxhlv.streamlit.app/" 
    },
    { 
      title: "TODO List", 
      category: "Web design", 
      img: "/projects/todo.jpg", 
      link: "https://flask-todo-app-8qpz.onrender.com/"
    },
    { 
      title: "TskFlow-Pro", 
      category: "Web development", 
      img: "https://i.pinimg.com/1200x/52/00/fa/5200fae2984ae68163a63d8566f1f785.jpg", 
      link: "https://task-flow-frontend-phi.vercel.app/"
    },
    { 
      title: "TileVista", 
      category: "Web design", 
      img: "https://i.pinimg.com/736x/42/3b/45/423b45b6800020d660ef01da67dbde44.jpg", 
      link: "https://muraliz-tiles.vercel.app/"
    },
    {
      title:"BitNexa",
      category:"Web development",
      img:"https://www.reuters.com/resizer/v2/OHRVOCXQWVNYDFN2BDMRNO6B3Y.jpg?auth=d966b5290f69e1623f6b1ca95c1daf490d9b3e25e11383dff6b13a999e98b0b8&height=2400&width=1920&quality=80&smart=true",
      link:"https://bitnexa.onrender.com/"
    },
    {
      title:"Cryptonix",
      category:"Web development",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAxZoKwFgJUVUi023FeYOdyX8Dqbjb6FVzkgpyvxR24PzzhqJLIshVM4yN&s=10",
      link:"https://cryptonix-n6el.onrender.com/"
    }
  ];

  const categories = ['All', 'Web design', 'Applications', 'Web development'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="animate-in fade-in duration-500 h-full flex flex-col">
      <header>
        <h2 className="text-3xl font-bold text-white mb-2">Portfolio</h2>
        <div className="w-10 h-1.5 bg-[#ffdb70] rounded-full mb-6"></div>
      </header>

      {/* Filter Tabs */}
      <div className="flex gap-6 mb-8 text-[15px]">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            className={`${filter === cat ? 'text-[#ffdb70]' : 'text-[#d6d6d6] hover:text-gray-200'} transition-colors font-medium`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 flex-1">
        {filteredProjects.map((project, index) => (
          <div key={index} className="group">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block outline-none">
              
              {/* Image Card Container */}
              <div className="relative bg-[#2b2b2c] h-44 rounded-2xl border border-[#383838] overflow-hidden mb-4 transition-all duration-300">
                
                {/* Project Image */}
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=Project'; }} // Agar image missing ho
                />
                
                {/* Dark Overlay + Eye Icon (Hover Effect) */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-[#383838] p-3 rounded-xl text-[#ffdb70] shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-300">
                    <FaEye size={22} />
                  </div>
                </div>
              </div>
              
              {/* Project Info */}
              <h4 className="font-bold text-[16px] text-white ml-1 group-hover:text-[#ffdb70] transition-colors">
                {project.title}
              </h4>
              <p className="text-[13px] text-[#a6a6a6] ml-1 mt-0.5 font-light">
                {project.category}
              </p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}