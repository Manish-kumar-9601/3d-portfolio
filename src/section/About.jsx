﻿import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import { Button } from '../components/Button'

export const About = () =>
    {
        const [hasCopied,setHasCopied]=useState(false)
    const handleCopy=()=>{
        navigator.clipboard.writeText("manishkumar2525@gmail.com")
        setHasCopied(true)
        setTimeout(()=>{
            setHasCopied(false)
        },2000)
    }
    return (
        <section id="about" className='c-space my-20  '>
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

                <div className="col-span-1 xl:row-span-3">

                    <div className="grid-container ">
                        <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />
                        <div className="">
                            <p className='grid-headtext' >Hi ,I'm Manish</p>
                            <p className='grid-subtext'>with 2 years of experience , I have honed my skills in Frontend and Backend development ,with a focus on robust websites. </p>
                        </div>
                    </div>

                </div>

<div className="col-span-1 xl:row-span-3 ">
<div className="grid-container items-center">
    <img src="/assets/grid2.png" alt="grid2" className='w-full sm:w-[276px] h-fit object-contain '/>
    <div>
        <p className="grid-headtext">Text stack </p>
        <p className="grid-subtext">I specialize in JavaScript/TypeScript with a focus on React and Next.js ecosystems. </p>
    </div>
</div>

</div>
<div className="col-span-1 xl:row-span-4 ">
<div className="grid-container items-center">
    <div className="rounded-3xl w-full sm:h-[326px] h=fit flex justify-center items-center">
<Globe height={326}
width={326} backgroundColor='rgba(0,0,0,0)'
backgroundImageOpacity={0.5}
showAtmosphere
showGraticules
globeImageUrl='//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'

/> 
    </div>
    <div>
        <p className="grid-headtext"> I work remotely across most timezones. </p>
        <p className="grid-subtext">I'm based in India ,with remote work available</p>
        <Button name={'Contact Me'} isBeam containerClass={'w-full mt-10'} />
    </div>
</div>
</div>
            <div className="xl:col-span-2 xl:row-span-3">
        <div className="grid-container items-center">
<img src="/assets/grid3.png" alt="grid3" className='w-full sm:h-[276p] h-fit object-contain' />
<div>
    <p className="grid-headtext">My Passion for Coding </p>
    <p className="grid-subtext">I loving problems and building things through code .coding isn't just my profession - it is my passion. </p>
</div>
        </div>

            </div>
            <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container items-center">
<img src="/assets/grid4.png" alt="grid4" className='w-full md:h-[126px] sm:h[276px] h-fit object-contain sm:object-top' />
<div className="space-y-2">
   
<p className="grid-subtext text-center">Contact me</p>
<div className="copy-container" onClick={handleCopy}>
<img src= {`/assets/${hasCopied? 'tick.svg' :'copy.svg'}`} alt="copy" />
<p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>
manishkumar2525@gmail.com
</p>
</div>
</div>

                </div>
                
            </div>
            
            </div>

        </section>
    )
}