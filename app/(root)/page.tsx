import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaTimes, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import SignUpButton from "@/components/SignUpButton";
import WaitlistCard from "@/components/WaitlistCard";
import SuccessCollage from "@/components/SuccessCollage";
import LeadForm from "@/components/LeadForm";
import PricingButton from "@/components/PricingButton";
import AnimatedCard from "@/components/AnimatedCard";

export default function Home() {
  // const cards = [
  //   { 
  //     id: 1, 
  //     title: "University of Cambridge", 
  //     description: "Second-Class Honours", 
  //     image: "/images/UoC Degree Certificate.jpg" 
  //   },
  //   { 
  //     id: 2, 
  //     title: "University of Leicester", 
  //     description: "First Class Honours", 
  //     image: "/images/First Class Honours.PNG" 
  //   },
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
  // ]

  const uniSuccessItems = [
    {
      image: "/images/Cambridge Geography Offer.PNG",
      title: "Geography, BA (Hons)",
      institution: "University of Cambridge",
      className: "h-48 object-contain",
    },
    {
      image: "/images/Lboro Offer.PNG",
      title: "Computer Science, BSc (with scholarship)",
      institution: "University of Loughborough",
      className: "h-48 object-contain",
    },
    {
      image: "/images/UoL Medicine Offer.PNG",
      title: "Medicine, MBChB",
      institution: "University of Leicester",
      className: "h-48 object-contain",
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
      image: "/images/Yelp Offer.png",
      title: "Junior Software Engineer",
      institution: "Yelp",
      className: "w-full h-48 object-contain",
    },
    {
      image: "/images/Job Offer 1.PNG",
      title: "Modern Analyst (Software)",
      institution: "Accenture",
      className: "w-full h-48 object-cover",
    },
    {
      image: "/images/Tutoring Offer.PNG",
      title: "Entrepreneurship (Online Tutoring)",
      institution: "Self-employed",
      className: "w-full h-48 object-cover",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 dark:bg-gradient-to-b dark:from-[#1e2129] dark:via-slate">
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
              {/* <span className="inline-flex flex-col sm:flex-row items-center px-4 py-2 rounded-full border border-blue-200 bg-white/80 backdrop-blur-sm text-sm shadow-sm dark:text-midnight-grey dark:bg-white">
                Top-tier tutors at unbeatable prices 
                <Link href="/about" className="ml-2 text-blue-600 hover:underline dark:text-navy-200">
                  Here&apos;s our story →
                </Link>
              </span> */}
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
              Find expert tutors for GCSEs and A-Levels
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-200">
              We match students with the best tutors and mentors who are actually affordable!
            </p>
            <p className="text-base text-gray-600 max-w-3xl mx-auto dark:text-gray-200">
              First lesson is upto <a href="#pricing" className="font-bold text-yellow-600 bg-clip-text text-transparent">40% off</a>! So, whether you are a student or parent, get started today.
            </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <SignUpButton />
                <PricingButton />
              </div>
            {/* Scroll Indicator */}
            <div className="mt-16 animate-bounce">
              <svg className="w-6 h-6 mx-auto text-blue-600 dark:text-yellow-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          {/* How It Works Section */}
          <section className="mt-48">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">How It Works (3 Steps)</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <div className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Step 1: Decide Your Needs</h3>
                  <p className="text-gray-600 dark:text-gray-300">Choose one or more subjects + level</p>
                </div>

                {/* Step 2 */}
                <div className="text-center">
                  <div className="bg-green-100 dark:bg-green-900 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Step 2: Get Matched With a Tutor</h3>
                  <p className="text-gray-600 dark:text-gray-300">Either pick a tutor or leave it to us to find the perfect tutor for your needs</p>
                </div>

                {/* Step 3 */}
                <div className="text-center">
                  <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Step 3: Start Learning</h3>
                  <p className="text-gray-600 dark:text-gray-300">Get started as early as this week and get up to 40% off your first lesson (limited time)</p>
                </div>
              </div>
            </div>
            {/* <div className="flex justify-center mt-12">
              <a 
                href="#enquiry-form" 
                className="bg-ocean hover:bg-navy text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
              >
                Book My First Lesson Now
              </a>
            </div> */}
          </section>

          {/* Tutor Call-to-Action Section */}
          <section className="mt-32">
            <div className="max-w-4xl mx-auto">
              {/* Tutors Banner */}
              <div className="">
                <Image 
                  src="/images/Tutors banner transparent.svg" 
                  alt="Our Tutors" 
                  width={800} 
                  height={400} 
                  className="w-full h-auto"
                />
              </div>

              {/* Call-to-Action Text and Button */}
              <div className="text-center">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Choose from tutors like the ones above or find more. If you&apos;re still unsure, we will find the perfect tutor for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link 
                    href="/find-tutor" 
                    className="bg-ocean hover:bg-navy text-white font-semibold py-2 px-6 mt-8 rounded-lg transition-colors inline-block"
                  >
                    Find a tutor
                  </Link>
                </div>
                
              </div>
            </div>
          </section>

          {/* Exam Boards Covered Section */}
          <section className="mt-48">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-light mb-8 text-gray-900 dark:text-white">Exam boards covered</h2>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                <div className="flex-1 flex items-center justify-center">
                  <Image 
                    src="/images/AQA_logo.svg" 
                    alt="AQA" 
                    width={200} 
                    height={100} 
                    className="h-32 w-auto max-w-full"
                  />
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <Image 
                    src="/images/Edexcel_logo.svg" 
                    alt="Edexcel" 
                    width={200} 
                    height={100} 
                    className="h-32 w-auto max-w-full"
                  />
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <Image 
                    src="/images/OCR_logo.svg" 
                    alt="OCR" 
                    width={200} 
                    height={100} 
                    className="h-32 w-auto max-w-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="mt-48 scroll-mt-24" id="services">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Services</h2>
            {/* <h4 className="text-l font-semibold mb-4 text-gray-900">We offer</h4> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:items-stretch">
              <AnimatedCard delay={0}>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100 hover:border-blue-200 transition-all h-full flex flex-col">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Subjects</h3>
                  <p className="text-gray-600 flex-grow">Comprehensive tutoring in all major STEM subjects for GCSEs and A-Levels: Biology, Business Studies, 
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
              </AnimatedCard>
              <AnimatedCard delay={150}>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100 hover:border-blue-200 transition-all h-full flex flex-col">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Flexible Lessons</h3>
                  <p className="text-gray-600 flex-grow">Schedule sessions at your convenience. We offer lessons anytime during the academic year, although earlier is best for results!</p>
                </div>
              </AnimatedCard>
              <AnimatedCard delay={300}>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100 hover:border-blue-200 transition-all h-full flex flex-col">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Academic & Career Mentorship</h3>
                  <p className="text-gray-600 flex-grow">Expert guidance on A-level and university applications. As well as helping you navigate career paths and opportunities.</p>
                </div>
              </AnimatedCard>
            </div>
          </section>

          {/* Problems with Current Tutoring */}
          <section className="mt-48">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">What&apos;s Currently Wrong with Tutoring?</h2>
            <AnimatedCard delay={0}>
              <div className="bg-white rounded-lg p-8 shadow-sm border border-red-100 hover:border-red-200 transition-all max-w-3xl mx-auto">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaTimes className="text-red-500 mt-1" />
                  <span className="text-gray-600">Expensive</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaTimes className="text-red-500 mt-1" />
                  <span className="text-gray-600">No career paths explored or designed</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaTimes className="text-red-500 mt-1" />
                  <span className="text-gray-600">Unrelatable tutors</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaTimes className="text-red-500 mt-1" />
                  <span className="text-gray-600">Usually won&apos;t mentor you for your future</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaTimes className="text-red-500 mt-1" />
                  <span className="text-gray-600">No degree apprenticeship application support</span>
                </li>
              </ul>
              </div>
            </AnimatedCard>
          </section>

          {/* Why Choose Us */}
          <section className="mt-48">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Why Choose Us?</h2>
            <AnimatedCard delay={0}>
              <div className="bg-white rounded-lg p-8 shadow-sm border border-green-100 hover:border-green-200 transition-all max-w-3xl mx-auto">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaCheck className="text-green-500 mt-1" />
                  <span className="text-gray-600">Affordable yet fair for both students and tutors</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="text-green-500 text-2xl sm:text-2xl md:text-3xl mt-1" />
                  <span className="text-gray-600">Our team is comprised of students and professionals in their early 20s, who have recently experienced the school system that students are currently going through</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="text-green-500 mt-1" />
                  <span className="text-gray-600">Many of our tutors also have mentoring experience and can help you get into top universities</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="text-green-500 mt-1" />
                  <span className="text-gray-600">Our tutors know how to be successful in job applications for the best companies</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="text-green-500 mt-1" />
                  <span className="text-gray-600">We offer more than just a tutor, you will get a friend and a role model</span>
                </li>
              </ul>
              </div>
            </AnimatedCard>
          </section>

          {/* Testimonials Section */}
          <section className="mt-48">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">What Our Students & Parents Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto md:items-stretch">
              {/* Testimonial 1 */}
              <AnimatedCard delay={0}>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100 hover:border-blue-200 transition-all h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-500 dark:text-gray-300 font-semibold text-lg">A</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Alka B.</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">English Language & Literature • GCSE</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic flex-grow">&ldquo;We recently joined Ace Educate, and my son has really enjoyed the one-to-one tutoring. The lessons are well structured, and the tutors provide detailed feedback on each session as well as his overall progress. It&apos;s a great service that keeps both parents and children informed and involved every step of the way.&rdquo;</p>
                </div>
              </AnimatedCard>

              {/* Testimonial 2 */}
              <AnimatedCard delay={150}>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100 hover:border-blue-200 transition-all h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-500 dark:text-gray-300 font-semibold text-lg">S</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">James D.</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Economics • A-level</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic flex-grow">&ldquo;It was excellent working with Uday he was insist on having a plan on whatever we did which was great to give me direction and the focus on exam technique was crucial for getting the A* that I ended up with&rdquo;</p>
                </div>
              </AnimatedCard>

              {/* Testimonial 3 */}
              <AnimatedCard delay={300}>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100 hover:border-blue-200 transition-all h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-500 dark:text-gray-300 font-semibold text-lg">J</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Ayyan P.</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Double Science • GCSE</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic flex-grow">&ldquo;The tutoring really helped me understand topics I was struggling with. My tutor explained everything clearly and made the lessons engaging. Definitely feel much more confident going into my exams now.&rdquo;</p>
                </div>
              </AnimatedCard>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mt-48 scroll-mt-24" id="pricing">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">Pricing</h2>
            
            {/* Early Bird Promo Banner */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 border border-yellow-500 rounded-lg p-6 shadow-lg">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-3">🎉 Early Bird Promo - Limited Time Only!</h3>
                  <p className="text-lg mb-2">Get a massive discount on your first lesson with our expert tutors</p>
                  <p className="text-base mb-4 font-medium">Available only at the start of the school term - ends soon!</p>
                  <div className="bg-white/20 rounded-lg p-6 max-w-md mx-auto">
                    <div className="text-4xl font-bold text-yellow-900 mb-2">£10 OFF</div>
                    <div className="text-xl font-semibold mb-2">Your First Lesson</div>
                    <div className="text-base">GCSE & A-Level Tutoring</div>
                  </div>
                  <p className="text-sm mt-4 font-medium">No discount code needed - discount automatically applied when booking</p>
                  <p className="text-sm mt-2 font-medium">Regular pricing applies from the second lesson onwards</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 lg:items-stretch">


              {/* GCSE Tutoring Tier */}
              <AnimatedCard delay={0}>
                <div className="group bg-white rounded-2xl p-8 shadow-sm border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg focus-within:border-blue-500 focus-within:shadow-lg transition-all cursor-pointer flex flex-col h-full">
                <div className="space-y-4 flex-grow">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold text-gray-900">GCSE Tutoring</h3>
                    <span className="text-xs font-bold text-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-white border border-yellow-500 rounded-full py-1 px-2 shadow-sm">EARLY BIRD PROMO</span>
                    {/* <span className="text-xs font-bold text-center text-blue-600 border border-blue-600 rounded-full py-1 px-2">POPULAR</span> */}
                  </div>
                  <p className="text-gray-500">Perfect for improving GCSE grades</p>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-4">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-gray-900 line-through">£25</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-green-600">£15</span>
                      <span className="text-gray-500">/ hour</span>
                      {/* <span className="text-xs font-medium bg-gradient-to-r from-yellow-400 to-yellow-500 text-white border border-yellow-500 rounded-full px-2 py-1 shadow-sm">first lesson</span> */}
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 mt-2">£25/hr from second lesson onwards</p>
                  <ul className="space-y-4 mt-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">Comprehensive GCSE subject coverage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">Exam technique and revision strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">Past paper practice and mock exams</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">Personalized learning plans</span>
                  </li>
                  </ul>
                </div>
                
                <a href="#enquiry-form" className="w-full mt-8 bg-white text-gray-900 border-2 border-gray-200 group-hover:border-blue-500 font-semibold py-3 px-6 rounded-lg transition-all inline-block text-center self-end">
                    Book a Lesson
                </a>
                </div>
              </AnimatedCard>

              {/* A-Level Tutoring Tier */}
              <AnimatedCard delay={150}>
                <div className="group bg-white rounded-2xl p-8 shadow-sm border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg focus-within:border-blue-500 focus-within:shadow-lg transition-all cursor-pointer flex flex-col h-full">
                <div className="space-y-4 flex-grow">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold text-gray-900">A-Level Tutoring</h3>
                    <span className="text-xs font-bold text-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-white border border-yellow-500 rounded-full py-1 px-2 shadow-sm">EARLY BIRD PROMO</span>
                  </div>
                  <p className="text-gray-500">Perfect for improving A-Level grades</p>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-4">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-gray-900 line-through">£30</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-green-600">£20</span>
                      <span className="text-gray-500">/ hour</span>
                      {/* <span className="text-xs font-medium bg-gradient-to-r from-yellow-400 to-yellow-500 text-white border border-yellow-500 rounded-full px-2 py-1 shadow-sm">first lesson</span> */}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">£30/hr from second lesson onwards</p>
                  <ul className="space-y-4 mt-6">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600">Advanced A-Level subject expertise</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600">University application preparation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600">Personal statement and interview guidance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600">Career pathway exploration</span>
                    </li>
                  </ul>
                </div>
                <a href="#enquiry-form" className="w-full mt-8 bg-white text-gray-900 border-2 border-gray-200 group-hover:border-blue-500 font-semibold py-3 px-6 rounded-lg transition-all inline-block text-center">
                    Book a Lesson
                  </a>
                </div>
              </AnimatedCard>

              {/* Mentoring Tier */}
              <AnimatedCard delay={300}>
                <div className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl focus-within:shadow-xl transition-all cursor-pointer flex flex-col h-full">
                <div className="space-y-4 flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900">Mentoring</h3>
                  <p className="text-gray-500">Perfect for career and academic guidance</p>
                  <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-gray-900">£30</span>
                  <span className="text-gray-500 ml-2">/ hour</span>
                  </div>
                  <ul className="space-y-4 mt-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">Personal statement review and guidance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">University application support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">Career pathway and degree choice advice</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">CV writing and interview preparation</span>
                  </li>
                  </ul>
                </div>
                <a href="#enquiry-form" className="w-full mt-8 bg-white text-gray-900 border-2 border-gray-200 group-hover:border-blue-500 font-semibold py-3 px-6 rounded-lg transition-all inline-block text-center self-end">
                  Book a Lesson
                </a>
                </div>
              </AnimatedCard>

                

            </div>
          </section>

          {/* Lead Form */}
          <section className="mt-48" id="enquiry-form">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Book your first lesson today!</h2>
            <LeadForm />
          </section>

          

          {/* Proof Section */}
          <section className="mt-48">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Proof of Success</h2>
            <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
              <AnimatedCard delay={0}>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100 hover:border-blue-200 transition-all">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Successful University Admissions</h3>
                  <SuccessCollage items={uniSuccessItems} />
                </div>
              </AnimatedCard>
              
              {/* <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100 hover:border-blue-200 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Academic Achievements</h3>
                <div className="space-y-4">
                  <SlidingCards items={cards} />
                </div>
              </div> */}

              <AnimatedCard delay={150}>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100 hover:border-blue-200 transition-all">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Professional Success</h3>
                  <SuccessCollage items={professionalSuccessItems} />
                </div>
              </AnimatedCard>
            </div>
          </section>

          

          {/* Waitlist Section */}
          <section className="mt-48" id="waitlist">
            <WaitlistCard />
          </section>

          {/* FAQ Section */}
          <section className="mt-48">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <AnimatedCard delay={0}>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100 hover:border-blue-200 transition-all">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">How do I get started?</h3>
                  <p className="text-gray-600">First, use the <Link href="/find-tutor" className="text-blue-600 hover:text-blue-800 underline">Find a tutor</Link> page to pick a tutor you like. Then, you can book a lesson or a FREE discovery call <a href="#enquiry-form" className="text-blue-600 hover:text-blue-800 underline">here</a>. Make sure to mention the name of the tutor you are interested in.</p>
                  
                </div>
              </AnimatedCard>
              <AnimatedCard delay={150}>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100 hover:border-blue-200 transition-all">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">What subjects and exam boards do you cover?</h3>
                  <p className="text-gray-600">We cover all major GCSE and A-Level subjects, including AQA, Edexcel and OCR exam boards.</p>
                </div>
              </AnimatedCard>
              <AnimatedCard delay={300}>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100 hover:border-blue-200 transition-all">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Can I cancel the lessons or the tutoring agreement at any time?</h3>
                  <p className="text-gray-600">Yes, you can cancel the tutoring agreement at any time. If you want to cancel a particular lesson, you can do so by contacting us 24 hours in advance.</p>
                </div>
              </AnimatedCard>
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
                <span className="text-gray-600 dark:text-gray-200">+44 7459 627884</span>
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
