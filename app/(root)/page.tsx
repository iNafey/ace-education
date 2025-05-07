import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaTimes, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import SlidingCards from "@/components/SlidingCards";
import SignUpButton from "@/components/SignUpButton";
import WaitlistCard from "@/components/WaitlistCard";
import SuccessCollage from "@/components/SuccessCollage";
export default function Home() {
  const cards = [
    { 
      id: 1, 
      title: "University of Cambridge", 
      description: "Second-Class Honours", 
      image: "/images/UoC Degree Certificate.jpg" 
    },
    { 
      id: 2, 
      title: "University of Leicester", 
      description: "First Class Honours", 
      image: "/images/First Class Honours.PNG" 
    },
    // {
    //   id: 3,
    //   title: "A-Level Results",
    //   description: "A*A*A",
    //   image: "/alevel.jpg",
    // },
    // { 
    //   id: 4, 
    //   title: "GCSE Results", 
    //   description: "Grades 7-9", 
    //   image: "/gcse.jpg" 
    // },
  ]

  const uniSuccessItems = [
    {
      image: "/images/Cambridge Geography Offer.PNG",
      title: "Geography, BA (Hons)",
      institution: "University of Cambridge",
      className: "w-full h-48 object-contain scale-110",
    },
    {
      image: "/images/Lboro Offer.PNG",
      title: "Computer Science, BSc (incl. scholarship)",
      institution: "University of Loughborough",
      className: "h-48 object-contain",
    },
    {
      image: "/images/UoL Medicine Offer.PNG",
      title: "Medicine, MBChB",
      institution: "University of Leicester",
      className: "w-full h-48 object-contain",
    },
    {
      image: "/job2.jpg",
      title: "Oxford Offer for Computer Science",
      institution: "University of Oxford",
      className: "w-full h-48 object-cover",
    },
  ];

  const professionalSuccessItems = [
    {
      image: "/images/GS Offer.PNG",
      title: "Investment Banking",
      institution: "Goldman Sachs",
      className: "w-full h-48 object-contain",
    },
    {
      image: "/images/Job Offer 2.PNG",
      title: "Software Graduate Programme",
      institution: "Thales",
      className: "w-full h-48 object-contain",
    },
    {
      image: "/images/Job Offer 1.PNG",
      title: "Modern Analyst (Software)",
      institution: "Accenture",
      className: "w-full h-48 object-cover",
    },
    {
      image: "/job2.jpg",
      title: "Entrepreneurship",
      institution: "Self-employed",
      className: "w-full h-48 object-cover",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 dark:bg-gradient-to-b dark:from-[#1e2129] dark:via-slate" >
      {/* Navbar */}
      

      {/* Hero Section */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="logo-container flex flex-col items-center justify-center my-16">
              <Image src="/logo.svg" alt="Ace Education Logo" width={600} height={600} />
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-ocean dark:text-white">Ace Educate</h1>
            </div>
            <div className="inline-block">
              <span className="inline-flex flex-col sm:flex-row items-center px-4 py-2 rounded-full border border-blue-200 bg-white/80 backdrop-blur-sm text-sm shadow-sm dark:text-midnight-grey dark:bg-white">
                Top-tier tutors at unbeatable prices 
                <Link href="/about" className="ml-2 text-blue-600 hover:underline dark:text-navy-200">
                  Here&apos;s our story →
                </Link>
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
              Online Tutoring for GCSEs and A-Levels
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-200">
              Ace Educate is the ultimate online tutoring platform to prepare students for GCSEs and A-Levels.
            </p>

            <SignUpButton />

            {/* Scroll Indicator */}
            <div className="mt-16 animate-bounce">
              <svg className="w-6 h-6 mx-auto text-blue-600 dark:text-yellow-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          {/* Services Section */}
          <section className="mt-32 scroll-mt-24" id="services">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Services</h2>
            {/* <h4 className="text-l font-semibold mb-4 text-gray-900">We offer</h4> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100 hover:border-blue-200 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Subjects</h3>
                <p className="text-gray-600">Comprehensive tutoring in all major STEM subjects for GCSEs and A-Levels: Biology, Business Studies, 
                  Chemistry, Computer Science, Economics, English, Geography, Maths, and Physics.</p>
                
                
                {/* <ul className="list-disc list-inside space-y-2 mt-5 text-gray-600">
                  <li>Biology</li>
                  <li>Business Studies</li>
                  <li>Chemistry</li>
                  <li>Computer Science</li>
                  <li>Economics</li>
                  <li>English</li>
                  <li>Geography</li>
                  <li>Maths</li>
                  <li>Physics</li>
                </ul> */}
                
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100 hover:border-blue-200 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Flexible Lessons</h3>
                <p className="text-gray-600">Schedule sessions at your convenience. We offer lessons anytime during the academic year, although earlier is best for results!</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100 hover:border-blue-200 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Academic & Career Mentorship</h3>
                <p className="text-gray-600">Expert guidance on A-level and university applications. As well as helping you navigate career paths and opportunities.</p>
              </div>
            </div>
          </section>

          {/* Problems with Current Tutoring */}
          <section className="mt-32">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">What&apos;s Currently Wrong with Tutoring?</h2>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-blue-100 hover:border-blue-200 transition-all max-w-3xl mx-auto">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaTimes className="text-red-500 mt-1" />
                  <span className="text-gray-600">Main focus is on grades and not future outlook</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaTimes className="text-red-500 mt-1" />
                  <span className="text-gray-600">No career paths explored or designed</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaTimes className="text-red-500 mt-1" />
                  <span className="text-gray-600">Expensive</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaTimes className="text-red-500 mt-1" />
                  <span className="text-gray-600">Unrelatable tutors</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mt-32">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Why Choose Us?</h2>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-blue-100 hover:border-blue-200 transition-all max-w-3xl mx-auto">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaCheck className="text-green-500 text-4xl sm:text-xl md:text-2xl mt-1" />
                  <span className="text-gray-600">Our team is comprised of young professionals who have experienced the recent school system that students are currently going through</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="text-green-500 mt-1" />
                  <span className="text-gray-600">Our knowledge about life after school is current</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="text-green-500 mt-1" />
                  <span className="text-gray-600">Our tutors know how to get into the best companies</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="text-green-500 mt-1" />
                  <span className="text-gray-600">We can help you get started on your entrepreneurial journey (if interested)</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="text-green-500 mt-1" />
                  <span className="text-gray-600">Fair price for both students and tutors</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="text-green-500 mt-1" />
                  <span className="text-gray-600">We offer more than just a tutor, you will get a friend and a role model</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Proof Section */}
          <section className="mt-32">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Proof of Success</h2>
            <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100 hover:border-blue-200 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Successful University Admissions</h3>
                <SuccessCollage items={uniSuccessItems} />
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100 hover:border-blue-200 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Academic Achievements</h3>
                <div className="space-y-4">
                  <SlidingCards items={cards} />
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100 hover:border-blue-200 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Professional Success</h3>
                <SuccessCollage items={professionalSuccessItems} />
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mt-32 scroll-mt-24" id="pricing">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">Pricing</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
              {/* Pay as you go Tier */}
              <div className="group bg-white rounded-2xl p-8 shadow-sm border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg focus-within:border-blue-500 focus-within:shadow-lg transition-all cursor-pointer flex flex-col">
                <div className="space-y-4 flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900">Pay as you go</h3>
                  <p className="text-gray-500">Perfect for occasional help</p>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">£25</span>
                    <span className="text-gray-500 ml-2">/ hour</span>
                  </div>
                  <div className="flex justify-start mb-2">
                    <h3 className="text-sm font-bold text-center text-red-500 border-2 border-red-500 rounded-full py-1 px-2 inline-block">Limited time only!</h3>
                  </div>
                  <ul className="space-y-4 mt-6">
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-green-500 mt-1" />
                      <span className="text-gray-600">Great for finding the right tutor</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-green-500 mt-1" />
                      <span className="text-gray-600">Ad-hoc lessons or mock exam prep</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-green-500 mt-1" />
                      <span className="text-gray-600">Career or entrepreneurial advice available</span>
                    </li>
                  </ul>
                </div>
                <a href="#waitlist" className="w-full mt-8 bg-white text-gray-900 border-2 border-gray-200 group-hover:border-blue-500 font-semibold py-3 px-6 rounded-lg transition-all inline-block text-center">
                    Join Waitlist
                  </a>
              </div>

              {/* Monthly Tier */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl focus-within:shadow-xl transition-all cursor-pointer flex flex-col">
                <div className="relative">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-yellow-300 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                    Most popular
                  </div>
                </div>
                <div className="space-y-4 flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900">Monthly Plan</h3>
                  <p className="text-gray-500">Perfect for weekly tutoring</p>
                  <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-gray-900">£100</span>
                  <span className="text-gray-500 ml-2">/ month</span>
                  </div>
                  {/* <p className="text-sm text-gray-500">Includes 4 hours of tutoring</p> */}
                  <ul className="space-y-4 mt-6">
                  <li className="flex items-start gap-3">
                    <FaCheck size={18} className="text-green-500 mt-1" />
                    <span className="text-gray-600">4 (1 hour) classes included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck size={18} className="text-green-500 mt-1" />
                    <span className="text-gray-600">Perfect for weekly tutoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck size={22} className="text-green-500 mt-1" />
                    <span className="text-gray-600">Problem solving, exam prep and career advice</span>
                  </li>
                  </ul>
                </div>
                <a href="#waitlist" className="w-full mt-8 bg-white text-gray-900 border-2 border-gray-200 group-hover:border-blue-500 font-semibold py-3 px-6 rounded-lg transition-all inline-block text-center self-end">
                  Join Waitlist
                </a>
              </div>

                {/* Yearly Tier */}
                <div className="group bg-white rounded-2xl p-8 shadow-sm border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg focus-within:border-blue-500 focus-within:shadow-lg transition-all cursor-pointer flex flex-col">
                <div className="space-y-4 flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900">Academic Year</h3>
                  <p className="text-gray-500">For the best exam results</p>
                  <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-gray-900">£750</span>
                  <span className="text-gray-500 ml-2">/ year</span>
                  </div>
                  <ul className="space-y-4 mt-6">
                  <li className="flex items-start gap-3">
                    <FaCheck size={18} className="text-green-500 mt-1" />
                    <span className="text-gray-600">Most cost effective option</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck size={18} className="text-green-500 mt-1" />
                    <span className="text-gray-600">32 weeks of tutoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck size={18} className="text-green-500 mt-1" />
                    <span className="text-gray-600">1 hour class every week till exams</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck size={25} className="text-green-500 mt-1" />
                    <span className="text-gray-600">Everything is taught before the exams (for best results)</span>
                  </li>
                  </ul>
                </div>
                <a href="#waitlist" className="w-full mt-8 bg-white text-gray-900 border-2 border-gray-200 group-hover:border-blue-500 font-semibold py-3 px-6 rounded-lg transition-all inline-block text-center self-end">
                  Join Waitlist
                </a>
                </div>

            </div>
          </section>

          {/* Waitlist Section */}
          <section className="mt-32" id="waitlist">
            <WaitlistCard />
          </section>

          {/* FAQ Section */}
          <section className="mt-32">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100 hover:border-blue-200 transition-all">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">How do I get started?</h3>
                <p className="text-gray-600">Simply sign up for our waitlist and we&apos;ll contact you to schedule your first session.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100 hover:border-blue-200 transition-all">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">What subjects do you cover?</h3>
                <p className="text-gray-600">We cover all major GCSE and A-Level subjects, with a focus on STEM subjects.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100 hover:border-blue-200 transition-all">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Can I change my subscription plan?</h3>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time.</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mt-32 mb-16 scroll-mt-24" id="contact">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Contact Us</h2>
            <div className="flex flex-col items-center space-y-6">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-2xl text-blue-600 dark:text-blue-400" />
                <span className="text-gray-600 dark:text-gray-200">team@aceeducate.co.uk</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaWhatsapp className="text-2xl text-blue-600 dark:text-blue-400" />
                <span className="text-gray-600 dark:text-gray-200">+44 123 456 7890</span>
              </div>
              {/* <div className="flex space-x-6">
                <Link href="https://facebook.com" className="hover:text-blue-600 dark:hover:text-navy-200 transition-colors">
                  <FaFacebook className="text-2xl" />
                </Link>
                <Link href="https://instagram.com" className="hover:text-blue-600 dark:hover:text-navy-200 transition-colors">
                  <FaInstagram className="text-2xl" />
                </Link>
                <Link href="https://twitter.com" className="hover:text-blue-600 dark:hover:text-navy-200 transition-colors">
                  <FaXTwitter className="text-2xl" />
                </Link>
              </div> */}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
