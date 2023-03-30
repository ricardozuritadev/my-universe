import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';

import Universe from './components/universe/universe';
import WelcomePage from './pages/welcome-page/welcome-page';

const App = () => {
  return (
    <>
      <WelcomePage />
      <Canvas>
        <PerspectiveCamera
          makeDefault
          position={[1.5, 1.5, 15]}
          fov={45}
          near={1}
          far={160}
        />
        <Universe />
      </Canvas>
    </>
  );
};

export default App;
