'use client'

import { useEffect, useState } from 'react'
import Scene from '@/components/Scene'
import useAudio from '@/hooks/useAudio'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { playSound } = useAudio()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen overflow-hidden bg-gray-900">
      {isLoaded && <Scene onInteraction={playSound} />}
    </main>
  )
}
