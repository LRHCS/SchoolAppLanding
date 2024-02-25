'use client'
import {useEffect, useState} from 'react'
import { gsap } from 'gsap'

export function HoverToGrow({ children }) {
    const [isHovering, setIsHovering] = useState(false)

    const handlePointerOver = () => {
        setIsHovering(true)
    }

    const handleMouseLeave = () => {
        setIsHovering(false)
    }

    // Use useEffect hook to perform side effects
    useEffect(() => {
        // Only animate if isHovering changes
        if (isHovering) {
            gsap.to('.custom-cursor', { scale: 3, duration: 0.3 })
        } else {
            gsap.to('.custom-cursor', { scale: 1, duration: 0.3 })
        }
    }, [isHovering])

    return (
        <div

            onPointerOver={handlePointerOver}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    )
}
