import CameraRig from '../camera-rig/camera-rig';
import { OrbitControls } from '@react-three/drei';

const Universe = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 0, 3]} intensity={1.5} />

      <group position-y={1} rotation={[0.4, 0, 0.2]}>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>

        <mesh position={[0, 0, 6]}>
          <sphereGeometry />
          <meshStandardMaterial color="yellowgreen" />
        </mesh>

        <mesh position={[9, 0, 0]}>
          <sphereGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh position={[-8, 0, 0]}>
          <sphereGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh position={[0, 0, -7]}>
          <sphereGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </group>

      {/* Camera movements */}
      <CameraRig />
      {/* <OrbitControls /> */}
    </>
  );
};

export default Universe;
