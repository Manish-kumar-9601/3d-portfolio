import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

export function ReactLogo(props) {
  const { nodes, materials } = useGLTF('models/react_logo.glb')
  return (
    <Float floatIntensity={1}  >
      <group scale={0.4}   {...props} >
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 7.935, 18.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[.39, .39, .5]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/react_logo.glb')

