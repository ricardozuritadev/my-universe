import { useControls } from 'leva';
import { useGLTF, useTexture } from '@react-three/drei';

const ExperiencePLanet = () => {
  const { nodes } = useGLTF('./models/planets/experience-planet.glb');
  const planetTexture = useTexture(
    './models/planets/experience-planet-texture.jpg'
  );
  planetTexture.flipY = false;

  const { position } = useControls('Experience planet', {
    position: {
      value: {
        x: 11.5,
        y: 0,
        z: 0,
      },
    },
  });

  return (
    <>
      <mesh
        geometry={nodes.Icosphere001.geometry}
        position={[position.x, position.y, position.z]}
        scale={0.6}
      >
        <meshBasicMaterial map={planetTexture} />
      </mesh>
      <mesh
        geometry={nodes.Icosphere002.geometry}
        position={[position.x, position.y, position.z]}
        scale={0.6}
      >
        <meshBasicMaterial map={planetTexture} />
      </mesh>
      <mesh
        geometry={nodes.Icosphere003.geometry}
        position={[position.x, position.y, position.z]}
        scale={0.6}
      >
        <meshBasicMaterial map={planetTexture} />
      </mesh>
    </>
    // <primitive
    //   object={planet.scene}
    //   position={[position.x, position.y, position.z]}
    //   scale={0.6}
    // >
    //   <meshBasicMaterial map={planetTexture} />
    // </primitive>
  );
};

useGLTF.preload('/models/planets/experience-planet.glb');

export default ExperiencePLanet;
