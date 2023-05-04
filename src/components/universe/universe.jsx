import { useEffect, useState } from 'react';
import { useControls } from 'leva';

import { OrbitControls, Stars } from '@react-three/drei';

import {
  PRODUCTION_CAMERA,
  DEBUG_CAMERA,
} from '../../constants/universe.constants';

import CameraRig from '../camera-rig/camera-rig';
import SolarSystem from '../solar-system/solar-system.component';

const Universe = () => {
  const [isProductionCamera, setIsProductionCamera] = useState(false);
  const [isDebugCamera, setIsDebugCamera] = useState(true);

  const { cameraType } = useControls('Cameras', {
    cameraType: {
      options: [PRODUCTION_CAMERA, DEBUG_CAMERA],
    },
  });

  useEffect(() => {
    if (cameraType === PRODUCTION_CAMERA) {
      setIsProductionCamera(true);
      setIsDebugCamera(false);
    } else {
      setIsProductionCamera(false);
      setIsDebugCamera(true);
    }
  }, [cameraType]);

  return (
    <>
      {isDebugCamera && <OrbitControls />}
      {isProductionCamera && <CameraRig />}

      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 5, 10]} intensity={1} />

      <Stars
        radius={50}
        depth={20}
        count={3500}
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
