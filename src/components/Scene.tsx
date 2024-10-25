import { useRef, useEffect, useState } from 'react'
import nextConfig from '../../next.config';
import CenteredSquareImage from './CenterdSquareImage';

interface SceneProps {
  onInteraction: () => void
}

interface BackGround{
  backgroundColor: string;
  imageName: string;
}

const BASE_PATH = nextConfig.basePath || "";

const backGrounds: BackGround[] = [
  { backgroundColor: '#F8F9FA', imageName: `${BASE_PATH}/BackgroundImages/saboten.jpg` },
  { backgroundColor: '#E9ECEF', imageName: `${BASE_PATH}/BackgroundImages/saboten.jpg` },
];

export default function Scene({ onInteraction }: SceneProps) {

  const [scrollProgress, setScrollProgress] = useState(0)

  const totalHeight = `${backGrounds.length * 1000}vh`

  useEffect(() => {

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight
      const progress = Math.max(0, Math.min(1, scrollPosition / maxScroll))
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  
  const backGroundDistanceZ : number = 2000;
  // スクロール位置に基づいてz-indexを計算
  const getZIndex = () => {
    const maxZ = backGrounds.length * backGroundDistanceZ * backGrounds.length;
    console.log(scrollProgress);
    
    
    return scrollProgress * maxZ
  }

  return (
    <>
      <div 
        className="relative w-full "
        style={{ height: totalHeight }}
      >
      </div>
      <div 
        className="fixed top-0 left-0 w-[100svw] h-[100svh] perspective-1000 flex justify-center items-center"
        onClick={onInteraction}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
      >
          <div className="relative "
          style={{
            transform: `translateZ(${getZIndex()}px)`,
            transformStyle: 'preserve-3d'
          }}
          >
          
            {backGrounds.map((item, index) =>(
              <CenteredSquareImage key={index} imageUrl={item.imageName} translateZ={-1 * index*backGroundDistanceZ}></CenteredSquareImage>
            ))}
          
          </div>
      </div>
    </>
  )
}
