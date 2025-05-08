"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTrigger, DialogTitle } from "./ui/dialog";


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
            <div className="bg-white rounded-lg shadow-sm border border-blue-100 overflow-hidden transition-all duration-300 hover:border-blue-200 hover:shadow-lg">
            <Dialog>
                    <DialogTrigger className="">
                        <Image 
                        src={card.image} 
                        alt={card.title} 
                        width={300} 
                        height={200} 
                        className="h-48 object-contain"
                        />
                    </DialogTrigger>
                    <DialogContent className="border-4 border-sky">
                        <DialogHeader>
                            <DialogTitle>More info</DialogTitle>
                        </DialogHeader>

                        <Image 
                        src={card.image} 
                        alt={card.title}
                        width={1200}
                        height={800}
                        className=''
                        />
                    </DialogContent>      
              </Dialog>
              <div className="p-4 space-y-2 border-t">
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