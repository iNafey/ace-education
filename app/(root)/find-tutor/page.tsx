import Link from "next/link";
import Image from "next/image";
import TutorListings from "@/components/TutorListings";

export default function FindTutor() {
  const tutors = [
    {
      id: 1,
      name: "Uday M.",
      university: "University of Cambridge - Geography",
      bio: "Passionate about making learning accessible and enjoyable. I'm a seasoned tutor with over 2 years of professional tutoring experience. I specialize in GCSE and A-Level Geography, Economics and Business Studies. I also mentor students in preparation for university admissions especially for Oxbridge.",
      tutoringStartingPrice: "£40",
      rating: 4.9,
      reviews: 23,
      lessons: 156,
      isNew: false,
      isTutor: true,
      canMentor: true,
      subjects: ["Geography", "Economics", "Business Studies"],
      image: "/images/Uday Profile New.jpg",
      subjectsOffered: [
        { subject: "Geography", level: "GCSE", price: "£40/hr" },
        { subject: "Economics", level: "GCSE", price: "£40/hr" },
        { subject: "Business Studies", level: "GCSE", price: "£40/hr" },
        { subject: "Geography", level: "A-Level", price: "£40/hr" },
        { subject: "Economics", level: "A-Level", price: "£40/hr" },
        { subject: "Business Studies", level: "A-Level", price: "£40/hr" }
      ]
    },
    {
      id: 2,
      name: "Vivek W.",
      university: "University of Warwick - Law",
      bio: "As a law graduate from Warwick, I bring both academic excellence and practical experience to every lesson. I offer lessons for Law, English Literature and English Language at A-Level and GCSE. I can also help with Law applications for top UK universities.",
      tutoringStartingPrice: "£25",
      rating: 5.0,
      reviews: 18,
      lessons: 89,
      isNew: true,
      isTutor: true,
      canMentor: true,
      subjects: ["English Literature", "English Language", "Law"],
      image: "/images/Vivek Profile New.PNG",
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
      bio: "I am a fifth-year student, currently studying Medicine at uni, I offer lessons for Biology, Chemistry and Physics at A-Level and GCSE. I can also help with Medicine applications for top UK universities.",
      tutoringStartingPrice: "£30",
      rating: 4.8,
      reviews: 31,
      lessons: 203,
      isNew: false,
      isTutor: true,
      canMentor: true,
      subjects: ["Chemistry", "Biology", "Physics"],
      image: "/images/Darshan Profile New.jpg",
      subjectsOffered: [
        { subject: "Chemistry", level: "GCSE", price: "£30/hr" },
        { subject: "Biology", level: "GCSE", price: "£30/hr" },
        { subject: "Physics", level: "GCSE", price: "£30/hr" },
        { subject: "Biology", level: "A-Level", price: "£30/hr" },
      ]
    },
    {
      id: 4,
      name: "Nafey M.",
      university: "University of Leicester - Computer Science",
      bio: "Full-time Software Engineer on a graduate scheme at a tech company. I love sharing knowledge and tips on how to get into the best universities. I have 1-year of mentoring experience with Zero Gravity, so, naturally I offer application support for Computer Science at A-level or Degree level.",
      tutoringStartingPrice: "£30",
      rating: 4.7,
      reviews: 15,
      lessons: 78,
      isNew: false,
      isTutor: false,
      canMentor: true,
      subjects: [],
      image: "/images/Nafey Profile New.jpg",
      subjectsOffered: []
    },
    {
      id: 5,
      name: "Andrej P.",
      university: "University of Cambridge - Mathematics (now PhD student)",
      bio: "Cambridge Maths graduate now doing a PhD in Machine Learning at Edinburgh University. I offer lessons for Maths, and Further Maths at A-Level and GCSE. Can also provide specialist Mathematics application support for the best universities.",
      tutoringStartingPrice: "£50",
      rating: 4.9,
      reviews: 27,
      lessons: 134,
      isNew: false,
      isTutor: true,
      canMentor: true,
      subjects: ["Mathematics", "Further Mathematics"],
      image: "/images/Andrej Profile New.jpg",
      subjectsOffered: [
        { subject: "Mathematics", level: "GCSE", price: "£50/hr" },
        { subject: "Further Mathematics", level: "GCSE", price: "£50/hr" },
        { subject: "Mathematics", level: "A-Level", price: "£50/hr" },
        { subject: "Further Mathematics", level: "A-Level", price: "£50/hr" }
      ]
    },
    {
      id: 6,
      name: "Parth S.",
      university: "University of Leicester - Physics",
      bio: "Currently studying Physics at uni, I offer lessons for Maths, Physics, Chemistry and Biology at A-Level and GCSE. I can also help with a-level and university applications as per your needs.",
      tutoringStartingPrice: "£25",
      rating: 4.6,
      reviews: 12,
      lessons: 45,
      isNew: true,
      isTutor: true,
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology"],
      image: "/images/Parth Profile New.jpg",
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
    },
    {
      id: 7,
      name: "Maya S.",
      university: "University of Manchester - Midwifery",
      bio: "Hi! I'm Maya, I specialize in English Literature and Biology at GCSE and A-Level, and midwifery/nursing applications too! As a student, I understand the academic challenges students face and use various study techniques that helped me till today. I'm passionate about helping students achieve grades they thought impossible!",
      tutoringStartingPrice: "£25",
      rating: 4.8,
      reviews: 8,
      lessons: 32,
      isNew: true,
      isTutor: true,
      canMentor: true,
      subjects: ["English Literature", "Biology"],
      image: "/images/Maya Profile New.jpg",
      subjectsOffered: [
        { subject: "English Literature", level: "GCSE", price: "£25/hr" },
        { subject: "Biology", level: "GCSE", price: "£25/hr" },
        { subject: "English Literature", level: "A-Level", price: "£30/hr" },
        { subject: "Biology", level: "A-Level", price: "£30/hr" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-midnight-grey">
      {/* Header */}
      <div className="bg-white dark:bg-midnight-grey border-b border-gray-200 dark:border-gray-800 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Private tutors and mentors that fit your schedule
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
              Find your perfect private tutor or mentor and arrange a trial Video Meeting for a fraction of the lesson price. Then book one-to-one Online Lessons to fit your schedule.
            </p>
              <Link href="/#enquiry-form" className="bg-ocean hover:bg-navy text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block">
                Book a tutor or mentor
              </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <TutorListings tutors={tutors} />
          </div>

          {/* Right Sidebar */}
          <div className="lg:w-80">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 sticky top-8">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Image src="/logo.svg" alt="ACE Educate" width={64} height={64} className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Looking for something specific?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Let us know what you&apos;re looking for and our tutor matching team will help you find the perfect fit.
                </p>
                <Link href="/#enquiry-form" className="w-full bg-ocean hover:bg-navy text-white font-semibold py-3 px-6 rounded-lg transition-colors mb-4 inline-block text-center">
                  Find me a tutor
                </Link>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Or call{" "}
                  <a href="tel:+447459627884" className="text-ocean hover:underline">
                    +44 (0)7459 627884
                  </a>{" "}
                  to speak to a tutor expert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
