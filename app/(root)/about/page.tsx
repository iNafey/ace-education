import Image from "next/image";
import Link from "next/link";
import { FaGraduationCap, FaBriefcase, FaLightbulb, FaHandshake } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 dark:bg-gradient-to-b dark:from-[#1e2129] dark:via-slate dark:from-[#1e2129]">
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">Our Story</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              How a group of young professionals transformed their academic success into a mission to help others.
            </p>
          </div>

          {/* Origin Story */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-blue-100 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Beginning</h2>
            <p className="text-gray-600 mb-6">
              Ace Educate was founded by a group of recent graduates who excelled in their academic careers and secured positions at prestigious companies. We noticed a significant gap in the current tutoring landscape - while there were many tutors focusing solely on academic achievement, few were equipped to guide students toward their future careers.
            </p>
            <p className="text-gray-600">
              Our journey began when we started informally mentoring younger students, sharing not just our academic knowledge, but also our recent experiences with university applications, internships, and job hunting. The impact we had on these students' lives inspired us to create something bigger.
            </p>
          </div>

          {/* Our Journey Timeline */}
          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm border border-blue-100">
              <div className="text-blue-600 mt-1">
                <FaGraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Academic Excellence</h3>
                <p className="text-gray-600">
                  Our founders achieved top grades in GCSEs and A-Levels, followed by First Class Honours degrees from leading universities.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm border border-blue-100">
              <div className="text-blue-600 mt-1">
                <FaBriefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Professional Success</h3>
                <p className="text-gray-600">
                  We secured positions at renowned companies, gaining valuable insights into various career paths.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm border border-blue-100">
              <div className="text-blue-600 mt-1">
                <FaLightbulb className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">The Idea</h3>
                <p className="text-gray-600">
                  Recognizing the need for mentors who understand both academic excellence and career development, we created Ace Educate.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm border border-blue-100">
              <div className="text-blue-600 mt-1">
                <FaHandshake className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Our Mission Today</h3>
                <p className="text-gray-600">
                  We're committed to providing affordable, high-quality tutoring that prepares students not just for exams, but for their future careers.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white rounded-lg p-8 shadow-sm border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Journey</h2>
            <p className="text-gray-600 mb-8">
              Whether you're preparing for GCSEs, A-Levels, or planning your future career, we're here to help you succeed.
            </p>
            <Link 
              href="/#waitlist"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-pastel-blue hover:bg-pastel-blue/90 hover:scale-105 hover:shadow-lg transition-all duration-200"
            >
              Join the Waitlist
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
