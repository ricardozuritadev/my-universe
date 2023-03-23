import CameraRig from '../camera-rig/camera-rig';

const Universe = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 0, 3]} intensity={1.5} />

      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>

      <mesh position={[6, 3, 0]}>
        <sphereGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position={[-5, 3, 0]}>
        <sphereGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position={[-6, -3, 0]}>
        <sphereGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      {/* Camera movements */}
      <CameraRig />
    </>
  );
};

export default Universe;
