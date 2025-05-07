import Image from "next/image";

export default function SuccessCollage() {

    return (
    <>
    <h3 className="text-xl font-semibold mb-4 text-gray-900">Professional Success</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-sm border border-blue-100 overflow-hidden transition-all duration-300 hover:border-blue-200">
            <Image 
                src="/job1.jpg" 
                alt="Investment Banking" 
                width={300} 
                height={200} 
                className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">Investment Banking</h3>
                <p className="text-gray-600">Goldman Sachs</p>
            </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-blue-100 overflow-hidden transition-all duration-300 hover:border-blue-200">
            <Image 
                src="/images/Job Offer 2.PNG" 
                alt="Software Graduate Programme" 
                width={300} 
                height={200} 
                className="w-full h-48 object-contain"
            />
            <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">Software Graduate Programme</h3>
                <p className="text-gray-600">Thales</p>
            </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-blue-100 overflow-hidden transition-all duration-300 hover:border-blue-200">
            <Image 
                src="/images/Job Offer 1.PNG" 
                alt="Modern Analyst (Software)" 
                width={300} 
                height={200} 
                className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">Modern Analyst (Software)</h3>
                <p className="text-gray-600">Accenture</p>
            </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-blue-100 overflow-hidden transition-all duration-300 hover:border-blue-200">
            <Image 
                src="/job2.jpg" 
                alt="Entrepreneurship" 
                width={300} 
                height={200} 
                className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">Entrepreneurship</h3>
                <p className="text-gray-600">Successful Startups</p>
            </div>
            </div>
        </div>
        </>
    )
}