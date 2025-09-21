'use client'

import Script from 'next/script'
import { useEffect } from 'react'

// Type declaration for Tally
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

export default function LeadForm() {
  useEffect(() => {
    // Load Tally embeds after the script is loaded
    if (typeof window !== 'undefined' && window.Tally) {
      window.Tally.loadEmbeds()
    }
  }, [])

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-blue-100">
      <Script 
        src="https://tally.so/widgets/embed.js" 
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && window.Tally) {
            window.Tally.loadEmbeds()
          }
        }}
      />
      <iframe 
        data-tally-src="https://tally.so/embed/mY8aGv?alignLeft=1&dynamicHeight=1&formEventsForwarding=1" 
        loading="lazy" 
        width="100%" 
        height="931" 
        frameBorder="0" 
        marginHeight={0} 
        marginWidth={0} 
        title="Learn how we can provide value to you"
        className="rounded-lg shadow-sm border border-blue-100 p-2"
      />
    </div>
  )
}
