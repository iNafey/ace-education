import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

// Tutor data - in a real app, this would come from a database
const tutors = [
  {
    id: 1,
    name: "Uday M.",
    university: "University of Cambridge - Geography",
    tutoringStartingPrice: "£25",
    mentoringPrice: "£30",
    rating: 4.9,
    reviews: 23,
    lessons: 156,
    isNew: true,
    isSuperTutor: true,
    respondsQuickly: false,
    isTutor: true,
    canMentor: true,
    subjects: ["Mathematics", "Further Mathematics"],
    image: "/images/Uday Profile New.jpg",
    about: "Passionate about making learning accessible and enjoyable. I'm a seasoned tutor with over 2 years of professional tutoring experience. I specialize in GCSE and A-Level Geography, Economics and Business Studies. I also mentor students in preparation for university admissions especially for Oxbridge.",
    qualifications: [
      { subject: "Geography", qualification: "A-Level", grade: "A*" },
      { subject: "Economics", qualification: "A-Level", grade: "A*" },
      { subject: "Mathematics", qualification: "A-Level", grade: "A" },
      { subject: "Geography", qualification: "University of Cambridge Bachelor's Degree", grade: "Second Class Honours" }
    ],
    availability: {
      monday: { morning: true, afternoon: true, evening: true },
      tuesday: { morning: true, afternoon: true, evening: true },
      wednesday: { morning: true, afternoon: true, evening: true },
      thursday: { morning: true, afternoon: true, evening: true },
      friday: { morning: true, afternoon: true, evening: true },
      saturday: { morning: true, afternoon: true, evening: true },
      sunday: { morning: true, afternoon: true, evening: true }
    },
    subjectsOffered: [
      { subject: "Geography", level: "GCSE", price: "£25/hr" },
      { subject: "Economics", level: "GCSE", price: "£25/hr" },
      { subject: "Business Studies", level: "GCSE", price: "£25/hr" },
      { subject: "Geography", level: "A-Level", price: "£30/hr" },
      { subject: "Economics", level: "A-Level", price: "£30/hr" },
      { subject: "Business Studies", level: "A-Level", price: "£30/hr" }

    ]
  },
  {
    id: 2,
    name: "Vivek W.",
    university: "University of Warwick - Law",
    tutoringStartingPrice: "£25",
    mentoringPrice: "£30",
    rating: 5.0,
    reviews: 18,
    lessons: 89,
    isNew: true,
    isSuperTutor: false,
    respondsQuickly: true,
    isTutor: true,
    canMentor: true,
    subjects: ["English Literature", "English Language", "Law"],
    image: "/images/Vivek Profile New.PNG",
    about: "As a law graduate from Warwick, I bring both academic excellence and practical experience to every lesson. I offer lessons for Law, English Literature and English Language at A-Level and GCSE. I can also help with Law applications for top UK universities.",
    qualifications: [
      { subject: "Law", qualification: "University of Warwick Bachelor's Degree", grade: "First Class Honours" }
    ],
    availability: {
      monday: { morning: true, afternoon: true, evening: true },
      tuesday: { morning: true, afternoon: true, evening: true },
      wednesday: { morning: true, afternoon: true, evening: true },
      thursday: { morning: true, afternoon: true, evening: true },
      friday: { morning: true, afternoon: true, evening: true },
      saturday: { morning: true, afternoon: true, evening: true },
      sunday: { morning: true, afternoon: true, evening: true }
    },
    subjectsOffered: [
      { subject: "Law", level: "GCSE", price: "£25/hr" },
      { subject: "English Literature", level: "GCSE", price: "£25/hr" },
      { subject: "English Language", level: "GCSE", price: "£25/hr" },
      { subject: "Law", level: "A-Level", price: "£30/hr" },
      { subject: "English Literature", level: "A-Level", price: "£30/hr" },
      { subject: "English Language", level: "A-Level", price: "£30/hr" }
    ]
  },
  {
    id: 3,
    name: "Darshan G.",
    university: "University of Leicester - Medicine",
    tutoringStartingPrice: "£25",
    mentoringPrice: "£30",
    rating: 4.8,
    reviews: 31,
    lessons: 203,
    isNew: false,
    isSuperTutor: true,
    respondsQuickly: false,
    isTutor: true,
    canMentor: true,
    subjects: ["Chemistry", "Biology", "Physics"],
    image: "/images/Darshan Profile.jpg",
    about: "I am a fifth-year student, currently studying Medicine at uni, I offer lessons for Biology, Chemistry and Physics at A-Level and GCSE. I can also help with Medicine applications for top UK universities as well as UCAT preparation.",
    qualifications: [
      { subject: "Chemistry", qualification: "A-Level", grade: "A*" },
      { subject: "Biology", qualification: "A-Level", grade: "A" },
      { subject: "Maths", qualification: "A-Level", grade: "A" },
      { subject: "Medicine", qualification: "Degree (Bachelors)", grade: "Currently Studying" }
    ],
    availability: {
      monday: { morning: true, afternoon: true, evening: true },
      tuesday: { morning: true, afternoon: true, evening: true },
      wednesday: { morning: true, afternoon: true, evening: true },
      thursday: { morning: true, afternoon: true, evening: true },
      friday: { morning: true, afternoon: true, evening: true },
      saturday: { morning: true, afternoon: true, evening: true },
      sunday: { morning: true, afternoon: true, evening: true }
    },
    subjectsOffered: [
      { subject: "Chemistry", level: "GCSE", price: "£25/hr" },
      { subject: "Biology", level: "GCSE", price: "£25/hr" },
      { subject: "Physics", level: "GCSE", price: "£25/hr" },
      { subject: "Chemistry", level: "A-Level", price: "£30/hr" },
      { subject: "Biology", level: "A-Level", price: "£30/hr" },
      { subject: "Physics", level: "A-Level", price: "£30/hr" },
    ]
  },
  {
    id: 4,
    name: "Nafey M.",
    university: "University of Leicester - Computer Science",
    tutoringStartingPrice: "£30",
    mentoringPrice: "£30",
    rating: 4.7,
    reviews: 15,
    lessons: 78,
    isNew: false,
    isSuperTutor: false,
    respondsQuickly: true,
    isTutor: false,
    canMentor: true,
    subjects: ["Computer Science"],
    image: "/images/Nafey Profile New.jpg",
    about: "Full-time Software Engineer on a graduate scheme at a tech company. I love sharing knowledge and tips on how to get into the best universities. I have a year of mentoring experience with Zero Gravity, so, naturally I offer application support for Computer Science at A-level or Degree level. Having developed many apps and turned them into startups, I am happy to share my experiences with entrepreneurship and app development.",
    qualifications: [
      { subject: "Maths", qualification: "A-Level", grade: "A*" },
      { subject: "Computer Science", qualification: "A-Level", grade: "A" },
      { subject: "Physics", qualification: "A-Level", grade: "B" },
      { subject: "Computer Science", qualification: "Bachelor's Degree (University of Leicester)", grade: "First Class Honours" }
    ],
    availability: {
      monday: { morning: false, afternoon: false, evening: true },
      tuesday: { morning: false, afternoon: false, evening: true },
      wednesday: { morning: false, afternoon: false, evening: true },
      thursday: { morning: false, afternoon: false, evening: true },
      friday: { morning: false, afternoon: false, evening: true },
      saturday: { morning: true, afternoon: true, evening: true },
      sunday: { morning: true, afternoon: true, evening: true }
    },
    subjectsOffered: [
    ]
  },
  {
    id: 5,
    name: "Andrej P.",
    university: "University of Cambridge - Mathematics (now PhD student)",
    tutoringStartingPrice: "£25",
    mentoringPrice: "£30",
    rating: 4.9,
    reviews: 27,
    lessons: 134,
    isNew: false,
    isSuperTutor: true,
    respondsQuickly: false,
    isTutor: true,  
    canMentor: true,
    subjects: ["Mathematics", "Further Mathematics"],
    image: "/images/Andrej Profile New.jpg",
    about: "Cambridge Maths graduate now doing a PhD in Machine Learning at Edinburgh University. I offer lessons for Maths, and Further Maths at A-Level and GCSE. Can also provide specialist Mathematics application support for the best universities.",
    qualifications: [
      { subject: "Mathematics", qualification: "Bachelor's Degree (Cambridge)", grade: "First Class Honours" },
      { subject: "Mathematics", qualification: "Master's Degree (Cambridge)", grade: "First Class Honours" },
      { subject: "Machine Learning", qualification: "PhD (Edinburgh)", grade: "Currently Studying" }
    ],
    availability: {
      monday: { morning: true, afternoon: true, evening: true },
      tuesday: { morning: true, afternoon: true, evening: true },
      wednesday: { morning: true, afternoon: true, evening: true },
      thursday: { morning: true, afternoon: true, evening: true },
      friday: { morning: true, afternoon: true, evening: true },
      saturday: { morning: true, afternoon: true, evening: true },
      sunday: { morning: true, afternoon: true, evening: true }
    },
    subjectsOffered: [
      { subject: "Mathematics", level: "GCSE", price: "£25/hr" },
      { subject: "Further Mathematics", level: "GCSE", price: "£25/hr" },
      { subject: "Mathematics", level: "A-Level", price: "£30/hr" },
      { subject: "Further Mathematics", level: "A-Level", price: "£30/hr" },
    ]
  },
  {
    id: 6,
    name: "Parth",
    university: "University of Leicester - Physics",
    tutoringStartingPrice: "£25",
    mentoringPrice: "£30",
    rating: 4.6,
    reviews: 12,
    lessons: 45,
    isNew: true,
    isSuperTutor: false,
    respondsQuickly: true,
    isTutor: true,
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology"],
    image: "",
    about: "Enthusiastic about teaching others. Currently studying Physics at uni. I offer lessons for Maths, Physics, Chemistry and Biology at A-Level and GCSE.",
    qualifications: [
      { subject: "Physics", qualification: "Bachelor's Degree (Leicester)", grade: "Currently Studying" }
    ],
    availability: {
      monday: { morning: true, afternoon: true, evening: true },
      tuesday: { morning: true, afternoon: true, evening: true },
      wednesday: { morning: true, afternoon: true, evening: true },
      thursday: { morning: true, afternoon: true, evening: true },
      friday: { morning: true, afternoon: true, evening: true },
      saturday: { morning: true, afternoon: true, evening: true },
      sunday: { morning: true, afternoon: true, evening: true }
    },
    subjectsOffered: [
      { subject: "Mathematics", level: "GCSE", price: "£25/hr" },
      { subject: "Physics", level: "GCSE", price: "£25/hr" },
      { subject: "Chemistry", level: "GCSE", price: "£25/hr" },
      { subject: "Biology", level: "GCSE", price: "£25/hr" },
      { subject: "Mathematics", level: "A-Level", price: "£30/hr" },
      { subject: "Physics", level: "A-Level", price: "£30/hr" },
      { subject: "Chemistry", level: "A-Level", price: "£30/hr" },
      { subject: "Biology", level: "A-Level", price: "£30/hr" }
    ]
  }
];

export default async function TutorProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tutorId = parseInt(id);
  const tutor = tutors.find(t => t.id === tutorId);

  if (!tutor) {
    return (
      <div className="min-h-screen bg-white dark:bg-midnight-grey pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Tutor not found</h1>
            <Link href="/find-tutor" className="text-ocean hover:underline">← Back to tutors</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-midnight-grey pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/find-tutor" className="inline-flex items-center text-ocean hover:underline">
            <FaArrowLeft className="mr-2" />
            Back to tutors
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Header Section */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg mb-6">
              {/* Desktop Layout */}
              <div className="hidden md:flex gap-6 p-6">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  {tutor.image ? (
                    <Image src={tutor.image} alt={tutor.name} width={160} height={160} className="w-40 h-40 rounded-lg" />
                  ) : (
                    <div className="w-40 h-40 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                      <span className="text-3xl font-bold text-gray-500 dark:text-gray-300">
                        {tutor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                </div>

                {/* Tutor Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{tutor.name}</h1>
                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">{tutor.university}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
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
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <div className="text-3xl text-gray-900 dark:text-white">
                        <span className="text-lg font-normal">from</span> <span className="font-bold">{tutor.tutoringStartingPrice}/hr</span>
                      </div>
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
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{tutor.name}</h1>
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
                  <p className="text-sm text-gray-400 dark:text-gray-500 mb-4">{tutor.university}</p>

                  {/* Price */}
                  {/* <div className="text-xl text-gray-900 dark:text-white">
                    <span className="text-sm font-normal">from</span> {tutor.tutoringStartingPrice}/hr
                  </div> */}
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About me</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{tutor.about}</p>
            </div>

            {/* Subjects Offered Section - Only show if tutor is a tutor (not mentor-only) */}
            {tutor.isTutor && (
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Subjects offered</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-600">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Subject</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Level</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tutor.subjectsOffered.map((subject, index) => (
                        <tr key={index} className="border-b border-gray-100 dark:border-gray-700">
                          <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{subject.subject}</td>
                          <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{subject.level}</td>
                          <td className="py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">{subject.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Mentoring Services Section - Only show if tutor can mentor */}
            {tutor.canMentor && (
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Mentoring Services Provided</h2>
                  <div className="text-lg text-gray-600 dark:text-gray-400">
                    {tutor.mentoringPrice}/hr - Mentoring rate
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                    Personal Statement Review
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                    A-level Subjects Choice Advice
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                    Degree Choice Advice
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                    Sixth-form/College Application Help
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                    University Application Help
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                    CV Writing and Review
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                    Cover Letter Writeup
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                    Degree Apprenticeship Guidance
                  </li>
                </ul>
              </div>
            )}

            {/* General Availability Section */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">General Availability</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Time</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900 dark:text-white">Mon</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900 dark:text-white">Tue</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900 dark:text-white">Wed</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900 dark:text-white">Thu</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900 dark:text-white">Fri</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900 dark:text-white">Sat</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900 dark:text-white">Sun</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 text-gray-700 dark:text-gray-300 font-medium">Morning (8am-12pm)</td>
                      {Object.entries(tutor.availability).map(([day, times]) => (
                        <td key={day} className="py-3 px-4 text-center">
                          {times.morning ? (
                            <span className="text-green-600 dark:text-green-400">✓</span>
                          ) : (
                            <span className="text-gray-400">✗</span>
                          )}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 text-gray-700 dark:text-gray-300 font-medium">Afternoon (12pm-4pm)</td>
                      {Object.entries(tutor.availability).map(([day, times]) => (
                        <td key={day} className="py-3 px-4 text-center">
                          {times.afternoon ? (
                            <span className="text-green-600 dark:text-green-400">✓</span>
                          ) : (
                            <span className="text-gray-400">✗</span>
                          )}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 text-gray-700 dark:text-gray-300 font-medium">Evening (4pm-8pm)</td>
                      {Object.entries(tutor.availability).map(([day, times]) => (
                        <td key={day} className="py-3 px-4 text-center">
                          {times.evening ? (
                            <span className="text-green-600 dark:text-green-400">✓</span>
                          ) : (
                            <span className="text-gray-400">✗</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Qualifications Section */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Qualifications</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Subject</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Qualification</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tutor.qualifications.map((qual, index) => (
                      <tr key={index} className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{qual.subject}</td>
                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{qual.qualification}</td>
                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">{qual.grade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="lg:w-80">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 sticky top-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Ready to get started?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Contact us to arrange a free meeting with {tutor.name} and discuss your learning goals.
                </p>
                <Link 
                  href="/#enquiry-form"
                  className="w-full bg-ocean hover:bg-navy text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-block text-center"
                >
                  Get in touch
                </Link>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  We&apos;ll connect you with {tutor.name} for a free consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
