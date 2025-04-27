'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { MobileMenu } from './MobileMenu';

export default function Navbar() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      // Update URL without causing a page reload
      window.history.pushState({}, '', `/#${targetId}`);
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-background border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900 dark:text-white">TutorPro</span>
          </div> */}
          <div className='flex'>
            <Link href='/'>
              <div className='flex items-center'>
                <Image src='/logo.svg' alt='logo' width={50} height={50} />
                <span className='text-30-extrabold ml-2 text-foreground'>Ace Educate</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="/#services" 
              onClick={(e) => handleScroll(e, 'services')}
              className="text-foreground hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 cursor-pointer"
            >
              Services
            </a>
            <a 
              href="/#pricing" 
              onClick={(e) => handleScroll(e, 'pricing')}
              className="text-foreground hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 cursor-pointer"
            >
              Pricing
            </a>
            <a 
              href="/#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              className="text-foreground hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 cursor-pointer"
            >
              Contact
            </a>
            {/* <Link href="/demo" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 flex items-center">
              Does it work?
              <span className="ml-2 bg-[#85e249] text-black text-xs px-2 py-0.5 rounded-full">NEW</span>
            </Link> */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            {/* <Link href="/login" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2">
                Login
            </Link> */}
            
            <a
              href="/#waitlist"
              onClick={(e) => handleScroll(e, 'waitlist')}
              className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-lg text-white bg-pastel-blue hover:bg-pastel-blue/90 hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              Register Interest
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}