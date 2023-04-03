import { useControls } from 'leva';

const StudiesPlanet = () => {
  const { position } = useControls('Studies planet', {
    position: {
      value: {
        x: -6.5,
        y: 0,
        z: 0,
      },
    },
  });

  return (
    <mesh position={[position.x, position.y, position.z]}>
      <sphereGeometry />
      <meshStandardMaterial color="mediumpurple" />
    </mesh>
  );
};

export default StudiesPlanet;
