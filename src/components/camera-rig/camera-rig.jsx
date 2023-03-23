import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const CameraRig = () => {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        -1 + (state.pointer.x * state.viewport.width) / 5,
        1 + state.pointer.y * 4,
        15,
      ],
      0.5,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });
};

export default CameraRig;
