"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function SlidingCards() {
  const cards = [
    { 
      id: 1, 
      title: "GCSE Results", 
      description: "Grades 7-9", 
      image: "/gcse.jpg" 
    },
    {
      id: 2,
      title: "A-Level Results",
      description: "A*A*A",
      image: "/alevel.jpg",
    },
    { 
      id: 3, 
      title: "University", 
      description: "First Class Honours", 
      image: "/images/First Class Honours.png" 
    }
  ]

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{
          x: [-800, 0],
        }}
        transition={{
          x: {
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          },
        }}
      >
        {cards.map((card) => (
          <div key={card.id} className="w-[300px] flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-blue-100 overflow-hidden transition-all duration-300 hover:border-blue-200">
              <Image 
                src={card.image} 
                alt={card.title} 
                width={300} 
                height={200} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}