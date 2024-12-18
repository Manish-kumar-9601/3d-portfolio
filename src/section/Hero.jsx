import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { HackerRoom } from '../components/HackerRoom'
import { CanvasLoader } from '../components/CanvasLoader'

export const Hero = () =>
{
    return (
        <section className="min-h-screen border-2 w-full flex-col relative" >
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className='sm:text-3xl text-2xl font-medium text-white text-center '>
                    Hi, I am Manish <span className='waving-hand'>👋 </span></p>
                <p className="hero_tag text-gray_gradient  ">
                    Building Product & Brands
                </p>
            </div>
            <div className="w-full h-full absolute inset-0">

                <Suspense fallback={CanvasLoader} >
                    <Canvas className='w-full h-full'>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />


                        <HackerRoom />
                    </Canvas>
                </Suspense>
            </div>

        </section>
    )
}
