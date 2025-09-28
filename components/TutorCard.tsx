import Link from "next/link";
import Image from "next/image";

interface TutorCardProps {
  tutor: {
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
  };
}

export default function TutorCard({ tutor }: TutorCardProps) {
  return (
    <Link href={`/tutor/${tutor.id}`} className="block">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-all duration-200 cursor-pointer">
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-6 p-6">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            {tutor.image ? (
              <Image src={tutor.image} alt={tutor.name} width={192} height={192} className="w-48 h-48 rounded-lg object-cover" />
            ) : (
              <div className="w-48 h-48 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-500 dark:text-gray-300">
                  {tutor.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            )}
          </div>

          {/* Tutor Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{tutor.name}</h3>
                  {tutor.isTutor && (
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2 py-1 rounded-full">
                      Tutor
                    </span>
                  )}
                  {tutor.canMentor && (
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs font-medium px-2 py-1 rounded-full">
                      Mentor
                    </span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-3">{tutor.university}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{tutor.bio}</p>
              </div>

              {/* Price */}
              <div className="text-right">
                <div className="text-2xl text-gray-900 dark:text-white mb-2">
                  <span className="text-lg font-normal">from</span> <span className="font-bold">{tutor.tutoringStartingPrice}/hr</span>
                </div>
                <button className="bg-ocean hover:bg-navy text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Book lesson
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Profile Image */}
          <div className="px-4 pt-4">
            {tutor.image ? (
              <Image src={tutor.image} alt={tutor.name} width={400} height={400} className="w-full aspect-square rounded-lg object-cover" />
            ) : (
              <div className="w-full aspect-square bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-500 dark:text-gray-300">
                  {tutor.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            )}
          </div>

          {/* Tutor Info */}
          <div className="p-4">
            {/* Name and Roles */}
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{tutor.name}</h3>
              {tutor.isTutor && (
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2 py-1 rounded-full">
                  Tutor
                </span>
              )}
              {tutor.canMentor && (
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs font-medium px-2 py-1 rounded-full">
                  Mentor
                </span>
              )}
            </div>

            {/* University */}
            <p className="text-sm text-gray-400 dark:text-gray-500 mb-3">{tutor.university}</p>

            {/* Bio */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{tutor.bio}</p>

            {/* Price */}
            <div className="text-lg text-gray-900 dark:text-white">
              <span className="text-sm font-normal">from</span> {tutor.tutoringStartingPrice}/hr
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
