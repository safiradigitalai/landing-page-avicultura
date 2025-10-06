'use client'

import { CaptureLandingSection } from '@/components/sections/CaptureLandingSection'
import { useEffect } from 'react'

export default function CapturePage() {
  useEffect(() => {
    // Esconder header e footer
    const header = document.querySelector('header')
    const footer = document.querySelector('footer')
    const nav = document.querySelector('nav')

    if (header) header.style.display = 'none'
    if (footer) footer.style.display = 'none'
    if (nav) nav.style.display = 'none'

    // Ajustar main
    const main = document.querySelector('main')
    if (main) {
      main.style.height = '100vh'
      main.style.padding = '0'
      main.style.margin = '0'
    }

    // Cleanup on unmount
    return () => {
      if (header) header.style.display = ''
      if (footer) footer.style.display = ''
      if (nav) nav.style.display = ''
      if (main) {
        main.style.height = ''
        main.style.padding = ''
        main.style.margin = ''
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <CaptureLandingSection />
    </div>
  )
}