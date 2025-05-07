import Image from "next/image";

interface SuccessItem {
    image: string;
    title: string;
    institution: string;
    className?: string;
}

export default function SuccessCollage({ items }: {items: SuccessItem[]}) {


    return (
    
    <div id="collage" className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {items.map((item, index) => (
            <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-blue-100 overflow-hidden transition-all duration-300 hover:border-blue-200"
            >
                <Image 
                    src={item.image} 
                    alt={item.title} 
                    width={300} 
                    height={200} 
                    className={item.className}
                />
                <div className="p-4 space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.institution}</p>
                </div>
            </div>
        ))}
    </div>
    
    )
}