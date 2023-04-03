import { useControls } from 'leva';

const AboutPlanet = () => {
  const { position } = useControls('About planet', {
    position: {
      value: {
        x: 0,
        y: 0,
        z: -9,
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

export default AboutPlanet;
