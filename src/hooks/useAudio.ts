import { useCallback, useRef } from 'react'

export default function useAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const playSound = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/sounds/interaction.mp3')
    }
    audioRef.current.currentTime = 0
    audioRef.current.play()
  }, [])

  return { playSound }
}