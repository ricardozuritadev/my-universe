import { useControls } from 'leva';

const SkillsPlanet = () => {
  const { position } = useControls('Skills planet', {
    position: {
      value: {
        x: 0,
        y: 0,
        z: 6,
      },
    },
  });

  return (
    <mesh position={[position.x, position.y, position.z]}>
      <sphereGeometry />
      <meshStandardMaterial color="yellowgreen" />
    </mesh>
  );
};

export default SkillsPlanet;
