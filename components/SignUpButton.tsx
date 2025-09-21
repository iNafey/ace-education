'use client'

export default function SignUpButton() {
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
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <a
        href="#enquiry-form"
        onClick={(e) => handleScroll(e, 'enquiry-form')}
        className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-lg text-white bg-pastel-blue hover:bg-pastel-blue/90 hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer"
        >
        Enquire Now
        </a>
    </div>
  );
}
