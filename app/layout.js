import './globals.css';
import Sidebar from './components/Sidebar';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#121212] text-white min-h-screen flex flex-col items-center p-4 md:p-10 font-sans">
        
        <div className="flex flex-col lg:flex-row gap-6 w-full max-w-[1200px] items-start">
          
          {/* Sidebar Section */}
          <div className="w-full lg:w-[280px] lg:sticky lg:top-10 shrink-0">
            <Sidebar />
          </div>

          {/* Right Content Area */}
          <main className="flex-1 w-full bg-[#1e1e1f] rounded-[30px] border border-[#383838] p-6 md:p-10 relative overflow-hidden min-h-[700px]">
            
            {/* Nav Bar - Ab sabhi devices par dikhegi */}
            <nav className="absolute top-0 right-0 bg-[#2b2b2c] border-b border-l border-[#383838] rounded-tr-[30px] rounded-bl-[20px] px-6 py-3 z-10 w-full md:w-auto">
              <ul className="flex justify-center md:justify-end gap-4 md:gap-8 text-[13px] md:text-[14px] font-medium text-[#d6d6d6]">
                <li><Link href="/" className="hover:text-[#ffdb70] transition-colors">About</Link></li>
                <li><Link href="/resume" className="hover:text-[#ffdb70] transition-colors">Resume</Link></li>
                <li><Link href="/portfolio" className="hover:text-[#ffdb70] transition-colors">Portfolio</Link></li>
                <li><Link href="/contact" className="hover:text-[#ffdb70] transition-colors">Contact</Link></li>
              </ul>
            </nav>

            {/* Content Container */}
            <div className="mt-16 md:mt-8">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}