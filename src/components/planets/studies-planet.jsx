import { useControls } from 'leva';
import { useGLTF } from '@react-three/drei';

const StudiesPlanet = () => {
  const planet = useGLTF('/models/planets/test-planet-4.glb');

  const { position } = useControls('Studies planet', {
    position: {
      value: {
        x: -10.5,
        y: 0,
        z: 0,
      },
    },
  });

  return (
    <primitive
      object={planet.scene}
      position={[position.x, position.y, position.z]}
      scale={0.55}
    />
  );
};

export default StudiesPlanet;
