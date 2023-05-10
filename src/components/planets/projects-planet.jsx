import { useControls } from 'leva';
import { useGLTF } from '@react-three/drei';

const ProjectsPlanet = () => {
  const planet = useGLTF('/models/planets/test-planet-1.glb');

  const { position } = useControls('About planet', {
    position: {
      value: {
        x: 0,
        y: 0,
        z: -11,
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

useGLTF.preload('/models/planets/test-planet-1.glb');

export default ProjectsPlanet;
