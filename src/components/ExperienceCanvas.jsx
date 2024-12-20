

import { OrbitControls, useGLTF } from '@react-three/drei';

export const ExperienceCanvas = () =>
{
    const result = useGLTF('https://models.readyplayer.me/67642b5fa74a43dc26252c8e.glb');

    return (
        <>

       
            <mesh  >
                <primitive object={result.scene} />
            </mesh>
        </>
    );
};
