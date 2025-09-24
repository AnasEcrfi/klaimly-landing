'use client'

import { useEffect, useRef, useState } from 'react'

export default function Video() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [snappedProgress, setSnappedProgress] = useState(0)
  const lastSnappedRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate scroll progress through the section
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const progress = Math.abs(rect.top) / (rect.height - windowHeight)
        const clampedProgress = Math.min(1, Math.max(0, progress))
        setScrollProgress(clampedProgress)

        // Snap points for each word and video
        const snapPoints = [0, 0.188, 0.375, 0.563, 0.75, 1]
        const snapThreshold = 0.03 // How close to snap point before it "magnets"

        let snapped = clampedProgress

        // Find closest snap point
        for (const snapPoint of snapPoints) {
          const distance = Math.abs(clampedProgress - snapPoint)
          if (distance < snapThreshold) {
            // Apply magnetic effect - ease towards snap point
            const magnetStrength = 1 - (distance / snapThreshold)
            snapped = clampedProgress + (snapPoint - clampedProgress) * magnetStrength * 0.5
            break
          }
        }

        // Smooth transition between snapped values
        const smoothed = lastSnappedRef.current + (snapped - lastSnappedRef.current) * 0.15
        lastSnappedRef.current = smoothed
        setSnappedProgress(smoothed)
      } else if (rect.top > 0) {
        setScrollProgress(0)
        setSnappedProgress(0)
        lastSnappedRef.current = 0
      } else {
        setScrollProgress(1)
        setSnappedProgress(1)
        lastSnappedRef.current = 1
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate text animations based on snapped scroll progress
  const getTextStyle = (index: number) => {
    const textPhase = snappedProgress * 1.33 // Scale to use 75% of scroll for text

    // Define clearer phases for each word
    const wordPhases = [
      { start: 0, focus: 0.0625, leave: 0.125 },      // Innovation
      { start: 0.125, focus: 0.3125, leave: 0.5 },    // Forschung
      { start: 0.5, focus: 0.6875, leave: 0.875 }     // Förderung
    ]

    const phase = wordPhases[index]

    // Special handling for first word
    if (index === 0) {
      if (textPhase < phase.focus) {
        // First word stays sharp and visible at the beginning
        return {
          opacity: 1,
          filter: 'none',
          transform: 'translate(-50%, -50%) scale(1)',
          zIndex: 2,
        }
      } else if (textPhase < phase.leave) {
        // Hold in focus for a bit
        return {
          opacity: 1,
          filter: 'none',
          transform: 'translate(-50%, -50%) scale(1)',
          zIndex: 2,
        }
      } else {
        // Then it moves forward and becomes blurry
        const progress = Math.min(1, (textPhase - phase.leave) / 0.125)
        const eased = progress * progress * progress // Cubic easing

        return {
          opacity: Math.max(0, 1 - eased * 0.8),
          filter: `blur(${eased * 25}px)`,
          transform: `translate(-50%, -50%) scale(${1 + eased * 1.5})`,
          zIndex: 3,
        }
      }
    }

    // Other words
    let opacity = 1
    let blur = 0
    let scale = 1
    let zIndex = 1

    if (textPhase < phase.start) {
      // Before appearing - hidden behind, small and blurry
      opacity = 0
      blur = 20
      scale = 0.4
      zIndex = 1
    } else if (textPhase < phase.focus) {
      // Coming into focus from behind - getting sharper
      const progress = Math.min(1, (textPhase - phase.start) / (phase.focus - phase.start))
      const eased = progress * progress * (3 - 2 * progress) // smoothstep

      opacity = eased
      blur = Math.max(0, 20 * (1 - eased))
      scale = 0.4 + 0.6 * eased
      zIndex = 2
    } else if (textPhase < phase.leave) {
      // In perfect focus - HOLD HERE (magnetic effect)
      opacity = 1
      blur = 0
      scale = 1
      zIndex = 2
    } else if (textPhase < phase.leave + 0.125) {
      // Moving forward towards user and becoming blurry
      const progress = Math.min(1, (textPhase - phase.leave) / 0.125)
      const eased = progress * progress * progress // Cubic for smoother exit

      opacity = Math.max(0, 1 - eased * 0.8)
      blur = eased * 25
      scale = 1 + eased * 1.5
      zIndex = 3
    } else {
      // After disappearing
      opacity = 0
      blur = 25
      scale = 2.5
      zIndex = 0
    }

    return {
      opacity,
      filter: blur > 0.5 ? `blur(${blur}px)` : 'none',
      transform: `translate(-50%, -50%) scale(${scale})`,
      zIndex,
    }
  }

  // Calculate video animation with smoother entrance
  const getVideoStyle = () => {
    const videoStart = 0.75

    if (snappedProgress < videoStart - 0.05) {
      // Hidden state
      return {
        width: '60%',
        height: '60%',
        borderRadius: '3rem',
        opacity: 0,
        transform: 'scale(0.7) translateY(20px)',
      }
    } else if (snappedProgress < videoStart) {
      // Pre-entrance fade in
      const preProgress = (snappedProgress - (videoStart - 0.05)) / 0.05
      return {
        width: '60%',
        height: '60%',
        borderRadius: '3rem',
        opacity: preProgress * 0.3,
        transform: `scale(${0.7 + preProgress * 0.1}) translateY(${20 - preProgress * 20}px)`,
      }
    } else {
      // Main video animation
      const videoProgress = (snappedProgress - videoStart) / (1 - videoStart)
      // Smooth cubic easing
      const easedProgress = videoProgress < 0.5
        ? 4 * videoProgress * videoProgress * videoProgress
        : 1 - Math.pow(-2 * videoProgress + 2, 3) / 2

      const scale = 0.8 + 0.2 * easedProgress
      const size = 60 + 40 * easedProgress
      const borderRadius = Math.max(0, 3 - 3 * easedProgress)
      const translateY = (1 - easedProgress) * 10

      return {
        width: `${size}%`,
        height: `${size}%`,
        borderRadius: `${borderRadius}rem`,
        opacity: Math.min(1, 0.3 + videoProgress * 0.7),
        transform: `scale(${scale}) translateY(${translateY}px)`,
      }
    }
  }

  const textOverlays = [
    'Innovation',
    'Forschung',
    'Förderung'
  ]

  return (
    <section ref={sectionRef} className="relative" style={{ height: '400vh' }}>
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">

        {/* Animated Text Overlays - First Phase */}
        <div className="absolute inset-0 flex items-center justify-center">
          {textOverlays.map((text, index) => (
            <div
              key={index}
              className="absolute left-1/2 top-1/2"
              style={getTextStyle(index)}
            >
              <h2 className="text-[4rem] sm:text-[6rem] md:text-[11rem] lg:text-[14rem] font-light text-[#1a1a1a] leading-none tracking-tight whitespace-nowrap"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif',
                  fontWeight: 200,
                  letterSpacing: '-0.05em',
                  textRendering: 'optimizeLegibility',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale'
                }}>
                {text}
              </h2>
            </div>
          ))}
        </div>

        {/* Video Container - Second Phase */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="relative overflow-hidden bg-black flex items-center justify-center pointer-events-auto will-change-transform"
            style={getVideoStyle()}
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/klaimly_video.m4v" type="video/mp4" />
              <source src="/klaimly_video.mp4" type="video/mp4" />
              {/* Fallback gradient if no video */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#3d2952]" />
            </video>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>

        {/* Progress Indicator Dots */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3">
          {[...textOverlays, 'Video'].map((_, index) => {
            const isActive =
              index === 0 && snappedProgress < 0.188 ||
              index === 1 && snappedProgress >= 0.188 && snappedProgress < 0.375 ||
              index === 2 && snappedProgress >= 0.375 && snappedProgress < 0.563 ||
              index === 3 && snappedProgress >= 0.75

            return (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-500 ease-out ${
                  isActive ? 'bg-[#1a1a1a] w-8' : 'bg-[#1a1a1a]/20 w-2'
                }`}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}