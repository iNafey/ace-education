'use client';

import { useState, useMemo } from "react";
import TutorCard from "@/components/TutorCard";
import TutorFilters from "@/components/TutorFilters";

interface Tutor {
  id: number;
  name: string;
  university: string;
  bio: string;
  tutoringStartingPrice: string;
  rating: number;
  reviews: number;
  lessons: number;
  isNew: boolean;
  isTutor?: boolean;
  canMentor?: boolean;
  subjects: string[];
  image: string;
  subjectsOffered: {
    subject: string;
    level: string;
    price: string;
  }[];
}

interface TutorListingsProps {
  tutors: Tutor[];
}

export default function TutorListings({ tutors }: TutorListingsProps) {
  const [filters, setFilters] = useState({
    teacherType: 'All',
    subject: 'All subjects',
    level: 'All levels',
    gender: 'All genders',
    price: 'All prices'
  });

  const filteredTutors = useMemo(() => {
    return tutors.filter(tutor => {
      // Teacher Type filter
      if (filters.teacherType === 'Tutor' && !tutor.isTutor) return false;
      if (filters.teacherType === 'Mentor' && !tutor.canMentor) return false;
      
      // Subject filter
      if (filters.subject !== 'All subjects') {
        const hasSubject = tutor.subjectsOffered.some(offering => 
          offering.subject === filters.subject
        );
        if (!hasSubject) return false;
      }
      
      // Level filter
      if (filters.level !== 'All levels') {
        const hasLevel = tutor.subjectsOffered.some(offering => 
          offering.level === filters.level
        );
        if (!hasLevel) return false;
      }
      
      // Gender filter
      if (filters.gender !== 'All genders') {
        // For now, all tutors are men, so we'll filter based on that
        if (filters.gender === 'Women') return false; // No women currently
        if (filters.gender === 'Men') return true; // All current tutors are men
      }
      
      // Price filter
      if (filters.price !== 'All prices') {
        const price = parseInt(tutor.tutoringStartingPrice.replace('£', ''));
        if (filters.price === 'under £20' && price >= 20) return false;
        if (filters.price === '£20-£25' && (price < 20 || price > 25)) return false;
        if (filters.price === 'over £25' && price <= 25) return false;
      }
      
      return true;
    });
  }, [filters, tutors]);

  return (
    <>
      {/* Filters */}
      <TutorFilters filters={filters} setFilters={setFilters} />

      {/* Tutor Listings */}
      <div className="space-y-6">
        {filteredTutors.map((tutor) => (
          <TutorCard key={tutor.id} tutor={tutor} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-8">
        <button className="bg-ocean hover:bg-navy text-white font-semibold py-3 px-8 rounded-lg transition-colors">
          More tutors coming soon
        </button>
      </div>
    </>
  );
}
