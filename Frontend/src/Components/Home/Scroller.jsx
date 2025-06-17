import { ChevronUp } from 'lucide-react'
import React, { useState } from 'react'
import { useEffect } from 'react'

const Up = ({target = ""}) => {
    const [showArrow, setShowArrow] =  useState(false)

    useEffect(()=>{
        const handleScroll = ( ) => {
            setShowArrow(window.scrollY > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    },[])

    return (
        <>
        {showArrow && (
            <a
             href={`#${target}`}
             className="fixed bottom-6 right-6  p-2 rounded-full bg-russian-Violet text-mint-green shadow-lg hover:border-2  hover:bg-transparent  hover:text-russian-Violet transition duration-300 z-50"
             aria-label='Scroll to Top'
             >
                <ChevronUp size={25} />
            </a>
        )}
        </>
    )
}



export default Up;