import Image from 'next/image';
import React from 'react';

interface imageData{
  imageUrl : string;
  translateZ: number;
}

const CenteredSquareImage = ({ imageUrl , translateZ = 0 }: imageData) => {
  const dimension = 'max(100svw,100svh)';

  return (
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          width: dimension,
          height: dimension,
          transform: `translate3D(-50%,-50%,${translateZ}px)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            maskImage: 'radial-gradient(circle, transparent 1%, black 2%)',
            WebkitMaskImage: 'radial-gradient(circle, transparent 1%, black 2%)'
          }}
        >

          <Image
            src={imageUrl}
            layout='fill'
            draggable="false"
            alt="Centered Square"
            className="object-cover w-full h-full"
          />

        </div>
      </div>
  );
};

export default CenteredSquareImage;
