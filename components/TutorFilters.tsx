'use client';

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface TutorFiltersProps {
  filters: {
    teacherType: string;
    subject: string;
    level: string;
    gender: string;
    price: string;
  };
  setFilters: (filters: {
    teacherType: string;
    subject: string;
    level: string;
    gender: string;
    price: string;
  }) => void;
}

export default function TutorFilters({ filters, setFilters }: TutorFiltersProps) {
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Teacher Type</label>
          <div className="relative">
            <select 
              value={filters.teacherType}
              onChange={(e) => setFilters({...filters, teacherType: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-ocean focus:border-ocean appearance-none"
            >
              <option>All</option>
              <option>Tutor</option>
              <option>Mentor</option>
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
          <div className="relative">
            <select 
              value={filters.subject}
              onChange={(e) => setFilters({...filters, subject: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-ocean focus:border-ocean appearance-none"
            >
              <option>All subjects</option>
              <option>Biology</option>
              <option>Business Studies</option>
              <option>Chemistry</option>
              <option>Computer Science</option>
              <option>Economics</option>
              <option>English Literature</option>
              <option>English Language</option>
              <option>Geography</option>
              <option>History</option>
              <option>Law</option>
              <option>Mathematics</option>
              <option>Physics</option>
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Level</label>
          <div className="relative">
            <select 
              value={filters.level}
              onChange={(e) => setFilters({...filters, level: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-ocean focus:border-ocean appearance-none"
            >
              <option>All levels</option>
              <option>GCSE</option>
              <option>A-Level</option>
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        
        <div className="flex items-end">
          <button 
            onClick={() => setShowMoreFilters(!showMoreFilters)}
            className="text-gray-600 dark:text-gray-400 hover:text-ocean flex items-center gap-2"
          >
            {showMoreFilters ? 'Close filters' : 'More filters'}
            <FaChevronDown className={`text-xs transition-transform ${showMoreFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
      
      {/* Expanded More Filters - Only shown when showMoreFilters is true */}
      {showMoreFilters && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap gap-4">
            {/* <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Lesson Type</label>
              <div className="relative">
                <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-ocean focus:border-ocean appearance-none">
                  <option>All types</option>
                  <option>1-on-1</option>
                  <option>Group</option>
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div> */}
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Gender</label>
              <div className="relative">
                <select 
                  value={filters.gender}
                  onChange={(e) => setFilters({...filters, gender: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-ocean focus:border-ocean appearance-none"
                >
                  <option>All genders</option>
                  <option>Men</option>
                  <option>Women</option>
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Price</label>
              <div className="relative">
                <select 
                  value={filters.price}
                  onChange={(e) => setFilters({...filters, price: e.target.value})}
                  disabled
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed appearance-none"
                >
                  <option>All prices (coming soon)</option>
                  <option>under £20</option>
                  <option>£20-£25</option>
                  <option>over £25</option>
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            {/* <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Availability</label>
              <div className="relative">
                <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-ocean focus:border-ocean appearance-none">
                  <option>All availability</option>
                  <option>Available this week</option>
                  <option>Available next week</option>
                  <option>Available later this month</option>
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div> */}
            {/* <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Price</label>
              <div className="relative">
                <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-ocean focus:border-ocean appearance-none">
                  <option>All prices</option>
                  <option>under £20</option>
                  <option>£20-£25</option>
                  <option>over £25</option>
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}
