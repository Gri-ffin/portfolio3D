import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PointMaterial, Preload, Points } from '@react-three/drei'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Stars = (props: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>()
  useFrame((_, delta) => {
    ref.current!.rotation.x -= delta / 10
    ref.current!.rotation.y -= delta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas
