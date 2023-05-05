import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const CameraRig = ({ xValues, yValues, zValue }) => {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        xValues[0] + (state.pointer.x * state.viewport.width) / xValues[1],
        yValues[0] + state.pointer.y * yValues[1],
        zValue,
      ],
      0.5,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });
};

export default CameraRig;
