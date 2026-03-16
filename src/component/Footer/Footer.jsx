import React from 'react';
import { Facebook, Twitter, Instagram, Github } from 'lucide-react'; 

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-[#131313] mb-4">Book Vibe</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Discover your next favorite read with Book Vibe. We curate the best 
              classics and modern masterpieces just for you.
            </p>
            <div className="flex gap-4">
              <Facebook size={20} className="text-gray-400 hover:text-[#23BE0A] cursor-pointer transition-colors" />
              <Twitter size={20} className="text-gray-400 hover:text-[#23BE0A] cursor-pointer transition-colors" />
              <Instagram size={20} className="text-gray-400 hover:text-[#23BE0A] cursor-pointer transition-colors" />
              <Github size={20} className="text-gray-400 hover:text-[#23BE0A] cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-[#131313] mb-4 uppercase text-xs tracking-widest">Services</h3>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li className="hover:text-[#23BE0A] cursor-pointer">Branding</li>
              <li className="hover:text-[#23BE0A] cursor-pointer">Design</li>
              <li className="hover:text-[#23BE0A] cursor-pointer">Marketing</li>
              <li className="hover:text-[#23BE0A] cursor-pointer">Advertisement</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#131313] mb-4 uppercase text-xs tracking-widest">Company</h3>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li className="hover:text-[#23BE0A] cursor-pointer">About us</li>
              <li className="hover:text-[#23BE0A] cursor-pointer">Contact</li>
              <li className="hover:text-[#23BE0A] cursor-pointer">Jobs</li>
              <li className="hover:text-[#23BE0A] cursor-pointer">Press kit</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#131313] mb-4 uppercase text-xs tracking-widest">Legal</h3>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li className="hover:text-[#23BE0A] cursor-pointer">Terms of use</li>
              <li className="hover:text-[#23BE0A] cursor-pointer">Privacy policy</li>
              <li className="hover:text-[#23BE0A] cursor-pointer">Cookie policy</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs">
          <p>© 2026 Book Vibe. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            Design inspired by your custom vibe.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;