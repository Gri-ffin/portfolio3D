import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
  const { progress } = useProgress()

  return (
    <Html>
      <span className='canvas-loader'>
        <p className='text-[14px] text-[#f1f1f1] font-extrabold mt-[40px]'
        >
          {progress.toFixed(2)}%
        </p>
      </span>
    </Html>
  )
}

export default Loader
