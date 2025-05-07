"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface Card {
  id: number,
  title: string,
  description: string,
  image: string,
}


export default function SlidingCards( {items} : {items: Card[]} ) {

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{
          x: [-300, 300],
        }}
        transition={{
          x: {
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          },
        }}
      >
        {items.map((card) => (
          <div key={card.id} className="w-[300px] flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-blue-100 overflow-hidden transition-all duration-300 hover:border-blue-200">
              <Image 
                src={card.image} 
                alt={card.title} 
                width={300} 
                height={200} 
                className="w-full h-48 object-contain"
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