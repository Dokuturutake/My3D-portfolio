export default function CircularText() {
    return (
      <div className="circular-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full"
        >
          <defs>
            <path
              id="circle"
              d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text className="fill-white text-sm">
            <textPath xlinkHref="#circle">
              One hole leads to a new perspective. Will you peek inside?
            </textPath>
          </text>
        </svg>
      </div>
    )
  }