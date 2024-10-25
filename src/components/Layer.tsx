interface LayerProps {
    translateZ: string;
  }
  
  export default function Layer({ translateZ }: LayerProps ) {
  
    return (
      <div
        className="layer absolute inset-0"
        style={{
          transform: `translateZ(${translateZ}px)`,
        }}
      >
        <div className={`plane-${translateZ} relative w-full h-full bg-opacity-50
        `} />
      </div>
    )
  }