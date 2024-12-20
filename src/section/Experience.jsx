﻿import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import { workExperiences } from '../constants'
import { OrbitControls } from '@react-three/drei'
import { CanvasLoader } from '../components/CanvasLoader'
import { Developer } from '../components/Developer'
export const Experience = () =>
{
    const [animationName, setAnimationName] = useState('idle');
    return (
        <section className="c-space my-20">
            <div className="w-full text-white/60">
                <h3 className="head-text">
                    My Work Experience
                </h3>
                <div className="work-container">
                    <div className="work-canvas">
                        <Canvas>
                            <ambientLight intensity={7} />
                            <spotLight position={[10, 10, 10]} angle={0.15} intensity={1} penumbra={1} />

                            <directionalLight position={[10, 10, 10]} intensity={1} />

                            <OrbitControls
                                enableZoom={false}
                                maxPolarAngle={Math.PI / 2}
                            />
                            <Suspense fallback={<CanvasLoader/>}></Suspense>

<Developer position-y={-3} scale={3} animationName={animationName} />
                        </Canvas>
                    </div>
                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workExperiences.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => setAnimationName(item.animation.toLowerCase())}
                                    onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                                    onPointerOut={() => setAnimationName('idle')}
                                    className="work-content_container group">
                                    <div className="flex flex-col h-full justify-start items-center py-2">
                                        <div className="work-content_logo">
                                            <img className="w-full h-full" src={item.icon} alt="" />
                                        </div>

                                        <div className="work-content_bar" />
                                    </div>

                                    <div className="sm:p-5 px-2.5 py-5 text-xl ">
                                        <p className="font-bold text-white/80 text-xl">{item.name}</p>
                                        <p className="text-sm mb-5 font-thin ">
                                            {item.pos} -- <span>{item.duration}</span>
                                        </p>
                                        <p className="group-hover:text-white transition-all ease-in-out font-thin  text-sm duration-500">{item.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// https://models.readyplayer.me/67642a342eb4f5a5fc498509.glb