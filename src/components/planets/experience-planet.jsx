import { useControls } from 'leva';

const ExperiencePLanet = () => {
  const { position } = useControls('Experience planet', {
    position: {
      value: {
        x: 7.5,
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

export default ExperiencePLanet;
