import { Canvas } from '@react-three/fiber'
import {
  Decal,
  Float,
  Preload,
  OrbitControls,
  useTexture
} from '@react-three/drei'

const Ball = ({ imgUrl }: { imgUrl: string }) => {
  const [decal] = useTexture([imgUrl])

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.75} />
      <directionalLight position={[0, 0, 0.5]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }: { icon: string }) => (
  <Canvas frameloop='always' gl={{ preserveDrawingBuffer: true }}>
    <OrbitControls enableZoom={false} />
    <Ball imgUrl={icon} />
    <Preload all />
  </Canvas>
)

export default BallCanvas
