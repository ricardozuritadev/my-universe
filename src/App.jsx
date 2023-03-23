import { Canvas } from '@react-three/fiber';
import Universe from './components/universe/universe';

const App = () => {
  return (
    <Canvas camera={{ position: [-1.5, 1, 15], fov: 45, near: 1, far: 50 }}>
      <Universe />
    </Canvas>
  );
};

export default App;
