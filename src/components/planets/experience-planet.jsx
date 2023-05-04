import { useControls } from 'leva';
import { useGLTF } from '@react-three/drei';

const ExperiencePLanet = () => {
  const planet = useGLTF('/models/planets/test-planet-2.glb');

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
    <primitive
      object={planet.scene}
      position={[position.x, position.y, position.z]}
      scale={0.6}
    />
  );
};

useGLTF.preload('/models/planets/test-planet-2.glb');

export default ExperiencePLanet;
