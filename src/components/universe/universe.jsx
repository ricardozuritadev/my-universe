import { OrbitControls, Stars, Html } from '@react-three/drei';

import CameraRig from '../camera-rig/camera-rig';
import SolarSystem from '../solar-system/solar-system.component';

const Universe = () => {
  return (
    <>
      {/* <OrbitControls /> */}
      {/* Camera movements */}
      <CameraRig />

      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 0, 3]} intensity={1.5} />

      <Stars
        radius={50}
        depth={20}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={0}
      />

      <SolarSystem />
    </>
  );
};

export default Universe;
