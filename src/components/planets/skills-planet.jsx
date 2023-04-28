import { useControls } from 'leva';
import { useGLTF } from '@react-three/drei';

const SkillsPlanet = () => {
  const planet = useGLTF('/models/planets/test-planet-3.glb');

  const { position } = useControls('Skills planet', {
    position: {
      value: {
        x: 0,
        y: 0,
        z: 10,
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

export default SkillsPlanet;
